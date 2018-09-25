#!/bin/sh

(cd client && ionic build)
git push origin `git subtree split --prefix client/www master`:gh-pages --force
