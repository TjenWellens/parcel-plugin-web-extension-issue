import pageSnippetHtml from './page-snippet.html'
import $ from "jquery";

$(document).ready(() => {
  $(document.body).append($(pageSnippetHtml))
})