Github Branching Scheme
=======================

There should be minimal branches in the main upstream of angular-ui/ui-leaflet.

Currently there should only be:

- master (2.X)
- gh-pages (active website)
- leaflet-1.X (IE Some major next release branch) (3.X)
- 1.X is the branch where code is still compatible post 1.0.0

Any an all other items as a dev **INCLUDING** admins and devs that have write permissions to the repo. Should work within their own fork
and PR changes to this repository.

There are exceptions to this like accidents and major/minor collaboration branches (where many devs touch same code work together piror to being ready).

As an admin and dev with write permissions the majority of the time you should be submitting PRS. However if you need to push your changes to the upstream then please do the following.

Example Working in master:
- `git checkout master`
- `git merge upstream/master` (your in master)
- `git push upstream`

Safer Example Working in master:

- `git checkout -t origin/master -b upstreamMaster`
- `git merge upstream/master` (your in upstreamMaster)
- `git push upstream`

Origin should be your personal fork and upstream should be angular-ui . If we need to explain this fully then you probably should not have admin nor write perms.

## Huge PRs (Many Commits)

If you can and you know what you are doing please rebase via `git rebase -i` to squash commits.

## Remember
With great power comes great responsibility. If it is abused it will be taken awayith!
