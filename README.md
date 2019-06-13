# PROJETO COPY-INSTAGRAM-BACKEND
Backend com as funcionalidades do instagram:
 - Criação de Posts;
 - Upload de imagens;
 - Like nos posts.
 

## Requerimentos

MongoDB: 
 - https://www.mongodb.com/what-is-mongodb
 
Libs em package.json

### Node

    $ node --version
    v8.9.2+

    $ yarn --version
    1.13.0+

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Instalação

    $ git clone https://github.com/jinascimento/instagram-copy-backend.git
    $ cd PROJECT
    $ yarn install
     
## Start & watch

    $ yarn start

## ENDPOINTS

##### CRIACÃO DE POSTS

```http
POST localhost:3003/posts
```

```
Body: form-data
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `image` | `file` | Imagem do post |
| `author` | `String` | Author do post |
| `place` | `String` | Lugar do post |
| `description` | `String` | descrição do post |
| `hashtags` | `String` | hashtags do post |

## Responses

Return JSON:

```javascript
{
    "likes": 0,
    "_id": "5d0297f7b770c14fb8a912f5",
    "author": "XX",
    "place": "São Paulo",
    "description": "GitHub",
    "hashtags": "#tecnologia",
    "image": "TECNOLOGIA.jpg",
    "createdAt": "2019-06-13T18:37:43.465Z",
    "updatedAt": "2019-06-13T18:37:43.465Z",
    "__v": 0
}
```

##### LISTA DE POSTS

```http
GET localhost:3003/posts
```

## Responses

Return JSON:

```javascript
[
    {
        "likes": 0,
        "_id": "5d0297f7b770c14fb8a912f5",
        "author": "XX",
        "place": "São Paulo",
        "description": "GitHub",
        "hashtags": "#tecnologia",
        "image": "TECNOLOGIA.jpg",
        "createdAt": "2019-06-13T18:37:43.465Z",
        "updatedAt": "2019-06-13T18:37:43.465Z",
        "__v": 0
    }
]
```

##### INSERÇÃO DE LIKE NO POST

```http
POST localhost:3003/posts/:id/like
```

## Responses

Return JSON:

```javascript
[
    {
        "likes": 1,
        "_id": "5d0297f7b770c14fb8a912f5",
        "author": "XX",
        "place": "São Paulo",
        "description": "GitHub",
        "hashtags": "#tecnologia",
        "image": "TECNOLOGIA.jpg",
        "createdAt": "2019-06-13T18:37:43.465Z",
        "updatedAt": "2019-06-13T18:37:43.465Z",
        "__v": 0
    }
]
```

## Status Codes

Gophish returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |

