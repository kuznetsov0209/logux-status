# Logux Status

<img align="right" width="95" height="95" title="Logux logo"
     src="https://cdn.rawgit.com/logux/logux/master/logo.svg">

UX best practices to report Logux synchronization status to user.

```js
var Client = require('logux-client/client')
var client = new Client({ … })

var attention = require('logux-status/attention')
attention(client)
```

<a href="https://evilmartians.com/?utm_source=logux-status">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
       alt="Sponsored by Evil Martians" width="236" height="54">
</a>

## `attention`

Highlight tab on synchronization error to notify user.

```js
var attention = require('logux-status/attention')
attention(client)
```

User could switch current tab in the middle of synchronization process.
So error could be returned from server when website is in background tab.

User expect correct synchronization until we told about a error.
So good UX must notify user, return her/him to website tab and show error.

It will add `*` to tab title on `error` event. Because of changed title,
browser will highlight tab until user will open it.

It return a function to disable itself.

```js
var unbind = attention(client)
function disableLogux() {
  unbind()
}
```

## `confirm`

Confirm close tab if there are unsynchronized actions to notify user.

```js
var confirm = require('logux-status/confirm')

var warning = 'Edits were not synchronize, do not leave the page.'
confirm(client, warning)
```
User could close current tab in the middle of synchronization process.
So good UX must notify user and request confirmation to close the tab.

Use optional parameter `warning`  to specify a text of warning.

It return a function to disable itself.

```js
var unbind = confirm(client, 'Edits were not synchronize, do not leave the page.')
function disableLogux() {
  unbind()
}
```
