# yzhanCluster
This is the source of depolyment yamls and static files for yzhan

## Sub Repos Documents
1. [Static CDN](./cdn)

2. [Containerization using kubernates](./container/)

## Present situation
The Contianerization plan has been dropped in May 2023.  
The major reason is that deploying a hybird cluster which runs on servers from different areas seems not profitable.  
Returning to the Classic Way that only includes 5 - 6 servers, no gRPC, only `http` is used for communication.  
**Simple but useful**, it meets the current tendency, has been a principle to solve problem both from the work and life.  
