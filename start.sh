docker build --tag monitoring-collector:1.0 .
docker run -dit --name monitoring-collector monitoring-collector:1.0
sleep 5
docker logs monitoring-collector
