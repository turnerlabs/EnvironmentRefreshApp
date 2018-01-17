FROM microsoft/aspnetcore-build:2.0.4-2.1.3 AS build

EXPOSE 4200
ENV ASPNETCORE_ENVIRONMENT Development
ENV ASPNETCORE_URLS http://+:3000

USER root

RUN npm -g config set user root --quiet
RUN npm install --quiet --no-progress -g @angular/cli@1.6.0
RUN npm cache clean --quiet --force

# Copy and prepare start script
COPY ./start.sh /root/
RUN chmod +x /root/start.sh

# Restore dotnet packages
WORKDIR /root/server
COPY ./server/*.json /root/server/
COPY ./server/*.csproj /root/server/
RUN dotnet restore

# Restore npm packages
WORKDIR /root/client
COPY ./client/*.json /root/client/
COPY ./client/*.js /root/client/
RUN npm --quiet --no-progress install

WORKDIR /root
CMD ["/root/start.sh"]
