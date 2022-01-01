# Changelog

Note: this changelog is for the shields.io server. The changelog for the badge-maker NPM package is at https://github.com/badges/shields/blob/master/badge-maker/CHANGELOG.md

---

## server-2022-01-01

- set content-length header on badge responses [#7179](https://github.com/badges/shields/issues/7179)
- Revert "got --> node-fetch" [#7175](https://github.com/badges/shields/issues/7175)
- fix [github] release/tag/download schema [#7170](https://github.com/badges/shields/issues/7170)
- Doc self hosting correction [#7024](https://github.com/badges/shields/issues/7024)
- Switch callbacks to `React.useCallback` [#7160](https://github.com/badges/shields/issues/7160)
- Supported nested groups on [GitLabPipeline] badge [#7159](https://github.com/badges/shields/issues/7159)
- fix: use updated beetle emoji name [#7162](https://github.com/badges/shields/issues/7162)
- Support nested groups on [GitLabTag] badge [#7158](https://github.com/badges/shields/issues/7158)
- Fixing incorrect JetBrains Plugin rating values for [JetBrainsRating] [#7140](https://github.com/badges/shields/issues/7140)
- support using release or tag name in [GitHub] Release version badge [#7075](https://github.com/badges/shields/issues/7075)
- feat: support branches in sonar badges [#7065](https://github.com/badges/shields/issues/7065)
- Typo fix in releases.md [#7137](https://github.com/badges/shields/issues/7137)
- Add [Modrinth] total downloads badge [#7132](https://github.com/badges/shields/issues/7132)
- Fix hyphens in docs for running code coverage [#7136](https://github.com/badges/shields/issues/7136)
- refactor and simplify [AzureDevOpsTests] [#7076](https://github.com/badges/shields/issues/7076)
- tests: update requires.io service test targets [#7081](https://github.com/badges/shields/issues/7081)
- got --> node-fetch [#6914](https://github.com/badges/shields/issues/6914)
- remove [github] admin routes [#7105](https://github.com/badges/shields/issues/7105)
- Changelog for Release server-2021-10-04 [#7104](https://github.com/badges/shields/issues/7104)
- feat: add 2021 support to GitHub Hacktoberfest [#7086](https://github.com/badges/shields/issues/7086)
- Add [ClearlyDefined] service [#6944](https://github.com/badges/shields/issues/6944)
- Update Shields production access doc [#7079](https://github.com/badges/shields/issues/7079)
- refactor: cleanup AppveyorTests with by using shared helpers [#7077](https://github.com/badges/shields/issues/7077)
- handle null licenses in crates.io response schema, run [crates] [#7074](https://github.com/badges/shields/issues/7074)
- add documentation guide for adding new secrets [#7072](https://github.com/badges/shields/issues/7072)
- change [JenkinsTests] targets to get service tests working again [#7068](https://github.com/badges/shields/issues/7068)
- refactor: switch to David status API and update error handling [#7070](https://github.com/badges/shields/issues/7070)
- refactor: cleanup legacy sinon sandboxing [#7066](https://github.com/badges/shields/issues/7066)
- fix: annotate false lgtm hardcoded creds alert [#7069](https://github.com/badges/shields/issues/7069)
- [OBS] add Open Build Service service-badge [#6993](https://github.com/badges/shields/issues/6993)
- Correction of badges url in self-hosting configuration with a custom port. Issue 7025 [#7036](https://github.com/badges/shields/issues/7036)
- fix: support gitlab token via env var [#7023](https://github.com/badges/shields/issues/7023)
- ensure docker image builds on PRs [#7019](https://github.com/badges/shields/issues/7019)
- Add API-based support for [GitLab] badges, add new GitLab Tag badge [#6988](https://github.com/badges/shields/issues/6988)
- tests: fix dockerversion service test [#7014](https://github.com/badges/shields/issues/7014)
- tests: fix spigetdownloadsize service test [#7018](https://github.com/badges/shields/issues/7018)
- [freecodecamp]: allow + symbol in username [#7016](https://github.com/badges/shields/issues/7016)
- Stop attempting to override Accept header in [GitHub] API provider [#7013](https://github.com/badges/shields/issues/7013)
- update branch in [githublernajson] test [#7012](https://github.com/badges/shields/issues/7012)
- Rename Riot to Element in Matrix badge help [#6996](https://github.com/badges/shields/issues/6996)
- Fixed Reddit Negative Karma Issue [#6992](https://github.com/badges/shields/issues/6992)
- refactor: update VS Marketplace Ratings badges for unrated extensions [#6986](https://github.com/badges/shields/issues/6986)
- Changelog for Release server-2021-09-01 [#6964](https://github.com/badges/shields/issues/6964)
- refactor(GitHubCommitActivity): switch to v4/GraphQL API [#6959](https://github.com/badges/shields/issues/6959)
- feat: add freecodecamp badge [#6958](https://github.com/badges/shields/issues/6958)
- use multi-stage build to reduce size [#6938](https://github.com/badges/shields/issues/6938)
- use the right version of NPM in docker build [#6941](https://github.com/badges/shields/issues/6941)
- Fix [MyGet] version example and test [#6940](https://github.com/badges/shields/issues/6940)
- Tidy up server imports [#6937](https://github.com/badges/shields/issues/6937)
- Switch all shields.io links to https [#6935](https://github.com/badges/shields/issues/6935)
- fix incorrect colorsForBackground detection [#6939](https://github.com/badges/shields/issues/6939)
- Migrate flat, flat-square, plastic and social to use `XmlElement` [#6883](https://github.com/badges/shields/issues/6883)
- update [requires] test/example [#6913](https://github.com/badges/shields/issues/6913)
- Fix badge classes links in tutorial [#6911](https://github.com/badges/shields/issues/6911)
- [TwitchExtensionVersion] New badge [#6900](https://github.com/badges/shields/issues/6900)
- remove disableStrictSsl param from [jenkins] [#6887](https://github.com/badges/shields/issues/6887)
- switch from husky to simple-git-hooks [#6904](https://github.com/badges/shields/issues/6904)
- enforce strict SSL checking for [coverity] [#6886](https://github.com/badges/shields/issues/6886)
- fix failing [gitlab] test [#6885](https://github.com/badges/shields/issues/6885)
- update [bugzilla] not found test [#6884](https://github.com/badges/shields/issues/6884)
- Revert "prefer release.name in [Github] release badge (#6879)" [#6880](https://github.com/badges/shields/issues/6880)
- prefer release.name in [Github] release badge [#6879](https://github.com/badges/shields/issues/6879)
- Update self hosting docs [#6877](https://github.com/badges/shields/issues/6877)
- fix auto-close action [#6876](https://github.com/badges/shields/issues/6876)
- fix DockerHub snapshot build [#6878](https://github.com/badges/shields/issues/6878)
- Support optionalDependencies in [GithubPackageJson] [#6749](https://github.com/badges/shields/issues/6749)
- Changelog for Release server-2021-08-01 [#6848](https://github.com/badges/shields/issues/6848)
- add github actions to build/push docker images [#6679](https://github.com/badges/shields/issues/6679)
- update auto close action for dependabot native [#6834](https://github.com/badges/shields/issues/6834)
- use v5 API for [AUR] badges [#6836](https://github.com/badges/shields/issues/6836)
- tests: add live Sonar tests with >=6.6 API changes [#6817](https://github.com/badges/shields/issues/6817)
- fix: authenticate weblate requests [#6790](https://github.com/badges/shields/issues/6790)
- chore: exclude services and tests from docs [#6791](https://github.com/badges/shields/issues/6791)
- [Sonar] Fix invalid fetch query to sonarqube >=6.6 [#6636](https://github.com/badges/shields/issues/6636)
- added a correct the path to the sponsers logo [#6813](https://github.com/badges/shields/issues/6813)
- tests: fix scrutinizerbuild service test [#6785](https://github.com/badges/shields/issues/6785)
- tests: fix Docker Version test for user repo [#6783](https://github.com/badges/shields/issues/6783)
- tests: fix codacy service tests [#6781](https://github.com/badges/shields/issues/6781)
- chore: switch to c8 for code coverage [#6778](https://github.com/badges/shields/issues/6778)
- Delegate discord logo to simple-icons, which matches the current branding [#6764](https://github.com/badges/shields/issues/6764)
- chore: refactor weblate code [#6765](https://github.com/badges/shields/issues/6765)
- Fix [CodeClimateCoverage] test [#6759](https://github.com/badges/shields/issues/6759)
- Fix [JenkinsTests] test [#6758](https://github.com/badges/shields/issues/6758)
- Re-apply 'Migrate request to got (part 1)' [#6755](https://github.com/badges/shields/issues/6755)
- Fix UptimeRobot status endpoint [#6757](https://github.com/badges/shields/issues/6757)
- Delete old deprecated badges [#6756](https://github.com/badges/shields/issues/6756)
- fix: weblate badges to better fit repo guidelines [Weblate] [#6712](https://github.com/badges/shields/issues/6712)
- Delegate related projects to awesome-badges list [#6746](https://github.com/badges/shields/issues/6746)
- Replace opn-cli with open-cli [#6747](https://github.com/badges/shields/issues/6747)
- Verify that Node 14 is installed in development [#6748](https://github.com/badges/shields/issues/6748)
- Migrate from CommonJS to ESM [#6651](https://github.com/badges/shields/issues/6651)
- Add Wikiapiary Extension Badge [WikiapiaryInstalls] [#6678](https://github.com/badges/shields/issues/6678)
- deprecate [beerpay] [#6708](https://github.com/badges/shields/issues/6708)
- deprecate [microbadger] [#6709](https://github.com/badges/shields/issues/6709)
- fix [github] commit since tests [#6705](https://github.com/badges/shields/issues/6705)
- [npmsioscore] Support npm score [#6630](https://github.com/badges/shields/issues/6630)
- Add [Weblate] badges [#6677](https://github.com/badges/shields/issues/6677)
- Changelog for Release server-2021-07-01 [#6687](https://github.com/badges/shields/issues/6687)
- improve [MavenCentral], [MavenMetadata], and [GradlePluginPortal] [#6628](https://github.com/badges/shields/issues/6628)
- docs: broken links and typos [#6676](https://github.com/badges/shields/issues/6676)
- test: add generic metric helper [#6684](https://github.com/badges/shields/issues/6684)
- convert bug report issue template to issue form [#6681](https://github.com/badges/shields/issues/6681)
- fix: fix regex to match [codecov]'s flags [#6655](https://github.com/badges/shields/issues/6655)
- Run on node 14 in production, drop node 10 support for badge-maker and update test matrix [#6652](https://github.com/badges/shields/issues/6652)
- fix usage style [#6638](https://github.com/badges/shields/issues/6638)
- Build(deps-dev): bump webextension-store-meta from 1.0.3 to 1.0.4 [#6631](https://github.com/badges/shields/issues/6631)
- update simple-icons to v5 with by-name lookup backwards compatibility [#6591](https://github.com/badges/shields/issues/6591)
- [GradlePluginPortal] add gradle plugin portal [#6449](https://github.com/badges/shields/issues/6449)
- badge-maker 3.3.1 release [#6568](https://github.com/badges/shields/issues/6568)
- convert [discord] to use static properties [#6566](https://github.com/badges/shields/issues/6566)
- upgrade some vulnerable packages [#6569](https://github.com/badges/shields/issues/6569)
- increase max-age for download and social badges [#6567](https://github.com/badges/shields/issues/6567)
- run package tests on node 16, drop node 10 testing [#6570](https://github.com/badges/shields/issues/6570)
- Dependency updates

## server-2021-10-04

- feat: add 2021 support to GitHub Hacktoberfest [#7086](https://github.com/badges/shields/issues/7086)
- Add [ClearlyDefined] service [#6944](https://github.com/badges/shields/issues/6944)
- handle null licenses in crates.io response schema, run [crates] [#7074](https://github.com/badges/shields/issues/7074)
- [OBS] add Open Build Service service-badge [#6993](https://github.com/badges/shields/issues/6993)
- Correction of badges url in self-hosting configuration with a custom port. Issue 7025 [#7036](https://github.com/badges/shields/issues/7036)
- fix: support gitlab token via env var [#7023](https://github.com/badges/shields/issues/7023)
- Add API-based support for [GitLab] badges, add new GitLab Tag badge [#6988](https://github.com/badges/shields/issues/6988)
- [freecodecamp]: allow + symbol in username [#7016](https://github.com/badges/shields/issues/7016)
- Rename Riot to Element in Matrix badge help [#6996](https://github.com/badges/shields/issues/6996)
- Fixed Reddit Negative Karma Issue [#6992](https://github.com/badges/shields/issues/6992)
- Dependency updates

## server-2021-09-01

- use multi-stage build to reduce size of docker images [#6938](https://github.com/badges/shields/issues/6938)
- remove disableStrictSsl param from [jenkins] [#6887](https://github.com/badges/shields/issues/6887)
- refactor(GitHubCommitActivity): switch to v4/GraphQL API [#6959](https://github.com/badges/shields/issues/6959)
- feat: add freecodecamp badge [#6958](https://github.com/badges/shields/issues/6958)
- use the right version of NPM in docker build [#6941](https://github.com/badges/shields/issues/6941)
- [TwitchExtensionVersion] New badge [#6900](https://github.com/badges/shields/issues/6900)
- enforce strict SSL checking for [coverity] [#6886](https://github.com/badges/shields/issues/6886)
- Update self hosting docs [#6877](https://github.com/badges/shields/issues/6877)
- Support optionalDependencies in [GithubPackageJson] [#6749](https://github.com/badges/shields/issues/6749)
- Dependency updates

## server-2021-08-01

- use v5 API for [AUR] badges [#6836](https://github.com/badges/shields/issues/6836)
- [Sonar] Fix invalid fetch query to sonarqube >=6.6 [#6636](https://github.com/badges/shields/issues/6636)
- Delegate discord logo to simple-icons, which matches the current branding [#6764](https://github.com/badges/shields/issues/6764)
- Re-apply 'Migrate request to got (part 1)' [#6755](https://github.com/badges/shields/issues/6755)
- Delete old deprecated badges [#6756](https://github.com/badges/shields/issues/6756)
- Replace opn-cli with open-cli [#6747](https://github.com/badges/shields/issues/6747)
- Verify that Node 14 is installed in development [#6748](https://github.com/badges/shields/issues/6748)
- Migrate from CommonJS to ESM [#6651](https://github.com/badges/shields/issues/6651)
- Add Wikiapiary Extension Badge [WikiapiaryInstalls] [#6678](https://github.com/badges/shields/issues/6678)
- deprecate [beerpay] [#6708](https://github.com/badges/shields/issues/6708)
- deprecate [microbadger] [#6709](https://github.com/badges/shields/issues/6709)
- [npmsioscore] Support npm score [#6630](https://github.com/badges/shields/issues/6630)
- Add [Weblate] badges [#6677](https://github.com/badges/shields/issues/6677)
- Dependency updates

## server-2021-07-01

- improve [MavenCentral], [MavenMetadata], and [GradlePluginPortal] [#6628](https://github.com/badges/shields/issues/6628)
- fix: fix regex to match [codecov]'s flags [#6655](https://github.com/badges/shields/issues/6655)
- fix usage style [#6638](https://github.com/badges/shields/issues/6638)
- update simple-icons to v5 with by-name lookup backwards compatibility [#6591](https://github.com/badges/shields/issues/6591)
- [GradlePluginPortal] add gradle plugin portal [#6449](https://github.com/badges/shields/issues/6449)
- upgrade some vulnerable packages [#6569](https://github.com/badges/shields/issues/6569)
- increase max-age for download and social badges [#6567](https://github.com/badges/shields/issues/6567)
- Dependency updates

## server-2021-06-01

- Changed creating badges to open a new Window/Tab [#6536](https://github.com/badges/shields/issues/6536)
- Make for-the-badge letter spacing more predictable, and rewrite layout logic [#5754](https://github.com/badges/shields/issues/5754)
- deprecate DockerBuild service [#6529](https://github.com/badges/shields/issues/6529)
- Remove rate limiting functionality [#6513](https://github.com/badges/shields/issues/6513)
- [GitHub] Move to 'funding' category [#5846](https://github.com/badges/shields/issues/5846)
- Add GitHub discussions total badge [GithubTotalDiscussions] [#6472](https://github.com/badges/shields/issues/6472)
- Add optional query parameter (include_prereleases) to [GemVersion] [#6451](https://github.com/badges/shields/issues/6451)
- Add [PingPong] Service [#6327](https://github.com/badges/shields/issues/6327)
- Dependency updates

## server-2021-05-01

- Add setting which allows setting a timeout on HTTP requests
  This is configured with the new `REQUEST_TIMEOUT_SECONDS` setting. If a request takes longer
  than this number of seconds a `408 Request Timeout` response will be returned.
- Deprecate [Bintray] service [#6423](https://github.com/badges/shields/issues/6423)
- Support git hash in [nexus] SNAPSHOT version [#6369](https://github.com/badges/shields/issues/6369)
- Replace 4183C4 with blue [#6366](https://github.com/badges/shields/issues/6366)
- [Youtube] Added channel view count and subscriber count badges [#6333](https://github.com/badges/shields/issues/6333)
- Fix Netlify badge by adding new color schema [#6340](https://github.com/badges/shields/issues/6340)
- [REUSE] Add service badges [#6330](https://github.com/badges/shields/issues/6330)
- Dependency updates

## server-2021-04-01

- Use NPM packages to provide fonts instead of Google Fonts [#6274](https://github.com/badges/shields/issues/6274)
- Prevent duplication of parameters in badge examples [#6272](https://github.com/badges/shields/issues/6272)
- Add docs for all types of releases [#6210](https://github.com/badges/shields/issues/6210)
- refresh self-hosting docs [#6273](https://github.com/badges/shields/issues/6273)
- allow missing 'goal' key in [liberapay] badges [#6258](https://github.com/badges/shields/issues/6258)
- use got to push influx metrics [#6257](https://github.com/badges/shields/issues/6257)
- Dependency updates

## server-2021-03-01

- ensure redirect target path is correctly encoded [#6229](https://github.com/badges/shields/issues/6229)
- [SecurityHeaders] Added a possibility for no follow redirects [#6212](https://github.com/badges/shields/issues/6212)
- catch URL parse error in [endpoint] badge [#6214](https://github.com/badges/shields/issues/6214)
- [Homebrew] Add homebrew downloads badge [#6209](https://github.com/badges/shields/issues/6209)
- update [pkgreview] url [#6189](https://github.com/badges/shields/issues/6189)
- Make [Twitch] a social badge [#6183](https://github.com/badges/shields/issues/6183)
- update [flathub] error handling [#6185](https://github.com/badges/shields/issues/6185)
- Add [Testspace] badges [#6162](https://github.com/badges/shields/issues/6162)
- Dependency updates

## server-2021-02-01

- Docs.rs badge (#6098)
- Fix feedz service in case the package page gets paginated (#6101)
- [Bitbucket] Server Adding Auth Tokens and Resolving Pull Request api … (#6076)
- Dependency updates

## server-2021-01-18

- Gotta start somewhere
