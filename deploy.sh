#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

cd ..
# 生成静态文件
vuepress build front-end-learning

cd -

cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mohong/front-end-learning.git master:gh-pages

cd -