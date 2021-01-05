# Get the project running

Steps:

1. Download repository

```bash
git clone https://github.com/abidur-rehman/txt2speech-ui
```

2. Move into example directory

```bash
cd ./txt2speech-ui
```

3. Install dependencies

```bash
yarn install
```

5. run locally or build

```bash
yarn start
# or
yarn build
```

#### Docker Deployment

##### Build Image
Build command should be executed from parent directory of the project (one level up).

```
docker build -t abidurrehman/txt2speech-ui:latest -f txt2speech-ui/Dockerfile .
```
##### Push Image to Docker Hub

```
docker push abidurrehman/txt2speech-ui:latest
```