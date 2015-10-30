Website Workflow Documentation
==============================

The branches *master* and *gh-pages* are now one in the same except that gh-pages has bower_components (--force) saved to the branch.

Reasoning:

- less confusion where and how gh-pages are deployed
- code and docs exist in the same branch. There are **NO** **Excuses** to not update documentation now with things being in the same place.
- documentation is now under the same version control and pull process and history of this libraries releases


To run just the website via grunt do:

- `grunt website`

- Open browser to [localhost:8888](http://localhost:8888).

- When done: PR or push code up.

- merge master into gh-pages (via PR acceptance or manual git cli merge)

- If there are new bower_components or new bower dependencies `bower install` and then `git add -A bower_components --force`.

- Finally PR or push up modified bower_components or include in previous PR above
