It's a plug in used to make the png images transparency under IE6;

Use the filter to make the png transparent, thinking of the "X" case, we need pass one gif image to avoid it.

Add below code to document.ready();
$.transPNG({reSrc: 'gifurl'}|| 'gifurl' || null);

if you don't pass any paremetter, remember adding the /image/blank.gif to your root of the web site.





