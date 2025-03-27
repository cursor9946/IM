# Stage 1: Build the application
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /build

# Copy the entire Backend project (including parent POM)
COPY . .

# Ensure we run Maven from the correct directory
WORKDIR /build

# First, install the parent POM (if using a multi-module project)
RUN mvn clean install -N

# Build the full project (including parent POM and all modules)
RUN mvn clean package -DskipTests

# Stage 2: Run the application
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copy the built JAR file from the previous stage
COPY --from=build /build/inventorymanagement-app/target/inventorymanagement-app-1.0.0.jar app.jar

# Create a non-root user (Corrected for Debian-based images)
RUN groupadd spring && useradd -m -g spring spring

USER spring

# Expose application port
EXPOSE 8080

# Set environment variables
ENV SPRING_PROFILES_ACTIVE=prod
ENV JAVA_OPTS="-Xmx512m -Xms256m"

# Run the application
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
