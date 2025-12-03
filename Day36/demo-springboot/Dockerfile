# Stage 1: build with maven
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# copy pom and download dependencies to leverage Docker cache
COPY pom.xml .
RUN mvn -B dependency:go-offline

# copy source and package
COPY src ./src
RUN mvn -B clean package -DskipTests

# Stage 2: runtime
FROM eclipse-temurin:17-jre-jammy
ENV JAVA_OPTS=""
ARG JAR_FILE=/app/target/*.jar
COPY --from=build /app/target/*.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["sh", "-c", "exec java $JAVA_OPTS -jar /app/app.jar"]
