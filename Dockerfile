FROM iojs:onbuild

RUN apt-get -y install git

RUN git clone https://github.com/arbiterofcool/hypetech-client.git
#RUN git clone $repo app

WORKDIR hypetech-client

RUN npm install

RUN gulp karma

RUN gulp browsersync --no-browser --target hypetech-client

# Expose the ports that your app uses. For example:
