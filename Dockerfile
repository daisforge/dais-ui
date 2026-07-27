FROM docker-release.registry-ci.dddddd.ru/ci04309835/ci04309835/snx/sbel9@sha256:3d4ae73ee50956ab184b1ae063f7577dfcdae9cf09424dc82d4a3a4d85ce3df7
RUN mkdir -p /syngx/conf.d
COPY ./syngx/default.conf /syngx/conf
COPY ./syngx/proxy.conf /syngx/conf.d
COPY ./dist/storybook/ /opt/syngx/html
