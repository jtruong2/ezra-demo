let $ = jQuery
let myWindow

$('.logo-button').on('click', function(e) {
  e.preventDefault
  $.ajax({
    url: `http://localhost:8085/v1/elements/applications/03f51f1b-f11e-40e7-ab2b-f4d915b91d9d/sessions?key=${e.target.name}`,
    type: 'post',
    headers: {
      'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1ETTJOalUyUTBVeFJFSXhPRVZFT0RaRlJqUkNOamswTXprM056SkNRamMwTURrelJVSTRSUSJ9.eyJodHRwczovL2NlLmlvL2lkZW50aXR5Ijp7ImlkIjoiMGU3ZTIyMjktYzg1OS00ZTlkLWE0NTktYTUyMzkwODVlMmM3IiwibGVnYWN5X2lkIjoiMzk1NTUiLCJsZWdhY3lfb3JnX2lkIjoiMTA0MSIsImFjY291bnRfaWQiOiIyNzM4MDNhMy03ZjMzLTQxZjQtOWE3My0wNjZkNmY2ZjlhMzEiLCJvcmdfaWQiOiI0MDJlMzc5OC1jMTZmLTQyYTEtYjlkZi1jYmM0MmJlZDIyYWUiLCJjdXN0b21lcl9pZCI6ImZkNTJjODljLWI2ZjQtNDY1Zi04MDg1LWE1MmEzNDkwZDVhYyIsImVtYWlsIjoiamltbXlAY2xvdWQtZWxlbWVudHMuY29tIn0sImlzcyI6Imh0dHBzOi8vY2xvdWRlbGVtZW50cy1zbmFwc2hvdC5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8MGU3ZTIyMjktYzg1OS00ZTlkLWE0NTktYTUyMzkwODVlMmM3IiwiYXVkIjpbImh0dHBzOi8vc25hcHNob3QuY2xvdWQtZWxlbWVudHMuY29tIiwiaHR0cHM6Ly9jbG91ZGVsZW1lbnRzLXNuYXBzaG90LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE1OTUyNjc1MjEsImV4cCI6MTU5NTM1MzkyMSwiYXpwIjoialQwYzA4UThXYUVJWmZ1bktmeDhkRzd4UzJkTHVhWGMiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIGFkZHJlc3MgcGhvbmUgb2ZmbGluZV9hY2Nlc3MiLCJndHkiOiJwYXNzd29yZCIsInBlcm1pc3Npb25zIjpbIjExMTpjb25kdWN0b3IiLCIxMTE6ZWxlbWVudCIsIjExMTplbGVtZW50aW5zdCIsIjExMTpmb3JtdWxhIiwiMTExOmlkZW50aXR5IiwiMTExOnBsYXRmb3JtIiwiMTExOnZkciJdfQ.zbt6n8BGieEYQNJ403wjnn12iqjw7ORbpIWeoTmghHmcPvozuDleB5p_w7PjEI9nKo8kQh7ZI03-urD220zm-1W5YZEtIYRHXdSGf9U6BXDvOSM5E38pUhZXMshLoIn8UTUHZUgXkREgt7-oV49AKRJdqLzF2do8GkXP8B5r9YMTVl2s9yOuqnvaI1MnK43VJqdWIrMikvneNBKKvqQ0PvccD2JAaiy-q93nfdW3m30KAxBrBp38e6pBm_lOdVmt89mJsrw6-yZReUN-6O6Wi36vzkCU1Vyc3IbJeN9qIcYxrgD09xq_wc7FRX51JS-C7EyomOAOCCLGSy8IK8XzQA`,
    },
    dataType: 'json',
    success: function(data) {
      openWin(data.redirectURL)
      var eventMethod = window.addEventListener
			      ? "addEventListener"
            : "attachEvent";
      var eventer = window[eventMethod];
	    var messageEvent = eventMethod === "attachEvent"
		        ? "onmessage"
            : "message";

      eventer(messageEvent, function (e) {

        // if (e.origin !== 'http://the-trusted-iframe-origin.com') return;
        
        if (e.data === "myevent" || e.message === "myevent") 
          alert('Message from iframe just came!');
        
        console.log(e);
      });
    },
    error: function(data) {
      console.log(data)
    }
  })
})

function openWin(url) {
  myWindow = window.open(url, "EzraDemo", "menubar=1, resizable=1, width=350, height=750")
}

function closeWin() {
  myWindow.close()
}