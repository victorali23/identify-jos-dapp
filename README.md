<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/identity-verification-system">
    <img src="docs/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Identity Verification System</h3>

  <p align="center">
    The Identity Verification System dapp documentation.
  </p>
</div>

## About
<p>
    The Identity Verification System is a decentralized application (dapp) powered by blockchain technology.
</p>
<p> 
    It allows users to submit identity documents, verifies and stores identity information, and provides a way to retrieve verified identities.
</p>

## Getting Started

Below you'll find instructions on how setting up this dapp locally.

### Prerequisites

Here are some packages you need to have installed on your PC:

* [nodejs](https://nodejs.org/en), [npm](https://docs.npmjs.com/cli/v10/configuring-npm/install), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

* [docker](https://docs.docker.com/get-docker/)

* [cartesi-cli](https://docs.cartesi.io/cartesi-rollups/1.3/development/migration/#install-cartesi-cli)
  ```sh
  npm install -g @cartesi/cli
  ```

### Installation

1. Clone this repo
   ```sh
   git clone https://github.com/victorali32/identity-verification-dapp.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Build and run the dapp via `cartesi-cli`
   ```sh
   cartesi build
   ```
   and
   ```sh
   cartesi run
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Here you can access the examples of dapp communication and resources consumption.

There are these resources available on this dapp:

### Advanced handlers
* #### submitIdentity
  ```js
    description — Submit an identity document.
    param data — {userId: UUID, documentType: string, documentData: string}
  ```
  data sample
  ```json
    {
        "action": "submitIdentity",
        "data": {
            "userId": "d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5",
            "documentType": "passport",
            "documentData": "base64encodedstring"
        }
    }
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a227375626d69744964656e74697479222c202264617461223a7b22757365724964223a2264386330346137622d653230372d346466622d613164322d633634653964303963396535222c2022646f63756d656e7454797065223a2270617373706f7274222c2022646f63756d656e7444617461223a22626173653634656e636f646564737472696e67227d7d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions

:
        ```sh
        cartesi machine
        ```

    - *via `curl`*
        ```sh
        curl -X POST -H "Content-Type: application/json" -d '{"action": "submitIdentity", "data": {"userId": "d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5", "documentType": "passport", "documentData": "base64encodedstring"}}' http://localhost:5001
        ```

* #### verifyIdentity
  ```js
    description — Verify an identity document.
    param data — {userId: UUID, documentId: UUID}
  ```
  data sample
  ```json
    {
        "action": "verifyIdentity",
        "data": {
            "userId": "d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5",
            "documentId": "eb18343e-bfd5-4187-9de1-7e9ed6c3a01e"
        }
    }
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a227665726966794964656e74697479222c202264617461223a7b22757365724964223a2264386330346137622d653230372d346466622d613164322d633634653964303963396535222c2022646f63756d656e744964223a2265623138333433652d626664352d343138372d396465312d376539656436633361303165227d7d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions:
        ```sh
        cartesi machine
        ```

    - *via `curl`*
        ```sh
        curl -X POST -H "Content-Type: application/json" -d '{"action": "verifyIdentity", "data": {"userId": "d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5", "documentId": "eb18343e-bfd5-4187-9de1-7e9ed6c3a01e"}}' http://localhost:5001
        ```

* #### getIdentityById
  ```js
    description — Get a verified identity by ID.
    param data — {userId: UUID, documentId: UUID}
  ```
  data sample
  ```json
    {
        "action": "getIdentityById",
        "data": {
            "userId": "d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5",
            "documentId": "eb18343e-bfd5-4187-9de1-7e9ed6c3a01e"
        }
    }
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a226765744964656e7469747942794964222c202264617461223a7b22757365724964223a2264386330346137622d653230372d346466622d613164322d633634653964303963396535222c2022646f63756d656e744964223a2265623138333433652d626664352d343138372d396465312d376539656436633361303165227d7d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions:
        ```sh
        cartesi machine
        ```

    - *via `curl`*
        ```sh
        curl -X POST -H "Content-Type: application/json" -d '{"action": "getIdentityById", "data": {"userId": "d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5", "documentId": "eb18343e-bfd5-4187-9de1-7e9ed6c3a01e"}}' http://localhost:5001
        ```

### Inspections
* #### submitIdentity
    - `curl` command:
    ```sh
    curl -X POST -H "Content-Type: application/json" -d '{"action": "submitIdentity", "data": {"userId": "d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5", "documentType": "passport", "documentData": "base64encodedstring"}}' http://localhost:5001
    ```

* #### verifyIdentity
    - `curl` command:
    ```sh
    curl -X POST -H "Content-Type: application/json" -d '{"action": "verifyIdentity", "data": {"userId": "d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5", "documentId": "eb18343e-bfd5-4187-9de1-7e9ed6c3a01e"}}' http://localhost:5001
    ```

* #### getIdentityById
    - `curl` command:
    ```sh
    curl -X POST -H "Content-Type: application/json" -d '{"action": "getIdentityById", "data": {"userId": "d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5", "documentId": "eb18343e-bfd5-4187-9de1-7e9ed6c3a01e"}}' http://localhost:5001
    ```
