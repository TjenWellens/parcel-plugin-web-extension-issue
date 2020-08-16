import pageSnippetHtml from './foo/page-snippet.html'
import $ from "jquery";

$(document).ready(() => {
  $(document.body).append($(pageSnippetHtml))
})