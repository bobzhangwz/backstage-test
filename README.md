# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install
yarn dev
```

## Setup secret

* `postgres secret`

```sh
cat <<EOF | sops --encrypt --output-type yaml  --age age13eykxagm0xnxrx6nwlrvle64nvsudeqwhyjdsrnvzlx9f9xxp57qcv56vy /dev/stdin > ./deployments/base/postgres/postgres-secrets.enc.yaml
apiVersion: v1
kind: Secret
metadata:
  name: postgres-secrets
  namespace: backstage
type: Opaque
data:
  POSTGRES_USER: <base64encode user name>
  POSTGRES_PASSWORD: <base64encode password>
EOF
```

* `github`

```sh
cat <<EOF | sops --encrypt --output-type yaml  --age age13eykxagm0xnxrx6nwlrvle64nvsudeqwhyjdsrnvzlx9f9xxp57qcv56vy /dev/stdin > ./deployments/base/backstage-secret.enc.yaml
apiVersion: v1
kind: Secret
metadata:
  name: backstage-secrets
  namespace: backstage
type: Opaque
stringData:
  GITHUB_TOKEN: <>
  AUTH_GITHUB_CLIENT_ID: <>
  AUTH_GITHUB_CLIENT_SECRET: <>
EOF
```
