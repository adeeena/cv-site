#!/bin/bash

sonar-scanner \
  -Dsonar.projectKey=CVPage \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.token=sqp_775614fabaf391172fff60e7b217a57d84a459c6