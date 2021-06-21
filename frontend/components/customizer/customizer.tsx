import React, { useRef, useState } from 'react'
import clipboardCopy from 'clipboard-copy'
import debounce from 'lodash.debounce'
import {useDebounce, useDebouncedCallback} from 'use-debounce'
import { staticBadgeUrl } from '../../../core/badge-urls/make-badge-url'
import { generateMarkup, MarkupFormat } from '../../lib/generate-image-markup'
import { Badge } from '../common'
import PathBuilder from './path-builder'
import QueryStringBuilder from './query-string-builder'
import RequestMarkupButtom from './request-markup-button'
import {
  CopiedContentIndicator,
  CopiedContentIndicatorHandle,
} from './copied-content-indicator'



function generateBuiltBadgeUrl({
  baseUrl,
  queryString,
  path,
}: {
  baseUrl: string,
  queryString: string | undefined,
  path: string,
}): string {
  const suffix = queryString ? `?${queryString}` : ''
  return `${baseUrl}${path}${suffix}`
}

function LivePreview({
  baseUrl,
  queryString,
  path,
  pathIsComplete,
}: {
  baseUrl: string,
  queryString: string | undefined,
  path: string,
  pathIsComplete: boolean | undefined, 
}): JSX.Element {
  let src
  const [debouncedBadgeUrl] = useDebounce(generateBuiltBadgeUrl({baseUrl, queryString, path}), 1000)
  if (pathIsComplete) { 
    src = debouncedBadgeUrl
  } else {
    src = staticBadgeUrl({
      baseUrl,
      label: 'preview',
      message: 'some parameters missing',
    })
}

  return (
    <p>
      <Badge alt="preview badge" display="block" src={src} />
    </p>
  
  )
}

export default function Customizer({
  baseUrl,
  title,
  pattern,
  exampleNamedParams,
  exampleQueryParams,
  initialStyle,
  isPrefilled,
  link = '',
}: {
  baseUrl: string
  title: string
  pattern: string
  exampleNamedParams: { [k: string]: string }
  exampleQueryParams: { [k: string]: string }
  initialStyle?: string
  isPrefilled: boolean
  link?: string
}): JSX.Element {
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35572
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/28884#issuecomment-471341041
  const indicatorRef =
    useRef<CopiedContentIndicatorHandle>() as React.MutableRefObject<CopiedContentIndicatorHandle>
  const [path, setPath] = useState('')
  const [queryString, setQueryString] = useState<string>()
  const [pathIsComplete, setPathIsComplete] = useState<boolean>()
  const [markup, setMarkup] = useState<string>()
  const [message, setMessage] = useState<string>()

  async function copyMarkup(markupFormat: MarkupFormat): Promise<void> {
    const builtBadgeUrl = generateBuiltBadgeUrl({
      baseUrl,
      queryString,
      path
    })
    const markup = generateMarkup({
      badgeUrl: builtBadgeUrl,
      link,
      title,
      markupFormat,
    })

    try {
      await clipboardCopy(markup)
    } catch (e) {
      setMessage('Copy failed')
      setMarkup(markup)
      return
    }

    setMarkup(markup)
    if (indicatorRef.current) {
      indicatorRef.current.trigger()
    }
  }

  function renderMarkupAndLivePreview(): JSX.Element {
    return (
      <div>
        <LivePreview
          baseUrl={baseUrl}
          path={path}
          pathIsComplete={pathIsComplete}
          queryString={queryString}    
        />
        <CopiedContentIndicator copiedContent="Copied" ref={indicatorRef}>
          <RequestMarkupButtom
            isDisabled={!pathIsComplete}
            onMarkupRequested={copyMarkup}
          />
        </CopiedContentIndicator>
        {message && (
          <div>
            <p>{message}</p>
            <p>Markup: {markup}</p>
          </div>
        )}
      </div>
    )
  }

  function handlePathChange({
    path,
    isComplete,
  }: {
    path: string
    isComplete: boolean
  }): void {
    setPath(path)
    setPathIsComplete(isComplete)
  }

  function handleQueryStringChange({
    queryString,
    isComplete,
  }: {
    queryString: string
    isComplete: boolean
  }): void {
    setQueryString(queryString)
  }

  return (
    <form action="">
      <PathBuilder
        exampleParams={exampleNamedParams}
        isPrefilled={isPrefilled}
        onChange={handlePathChange}
        pattern={pattern}
      />
      <QueryStringBuilder
        exampleParams={exampleQueryParams}
        initialStyle={initialStyle}
        onChange={handleQueryStringChange}
      />
      <div>{renderMarkupAndLivePreview()}</div>
    </form>
  )
}
