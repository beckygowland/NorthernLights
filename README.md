# NorthernLights

##Development environment
To Build docker, run this command in top level of directory
'''docker build -f ./Dockerfile.dev -t noli .'''

To Run
'''docker run -v %cd%/src:/usr/src/app/src -p 8000:8000 -i -t noli'''

##Production environment
To Build docker, run this command in top level of directory
'''build -f ./Dockerfile -t noli .'''

To Run
'''docker run -v %cd%/src:/usr/src/app/src -p 8000:8000 -i -t noli'''
