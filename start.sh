docker build --tag monitoring-collector:1.0 .
docker run -dit monitoring-collector:1.0 --name monitoring-collector
docker logs monitoring-collector
