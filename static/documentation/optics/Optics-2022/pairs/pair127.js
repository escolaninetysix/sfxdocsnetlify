var pairs =
{
"radial":{"exposure":1,"gradient":1}
,"lightens":{"darkens":1}
,"darkens":{"center":1,"edges":1}
,"center":{"edges":1,"image":1}
,"edges":{"image":1,"center":1}
,"image":{"correct":1,"spot":1}
,"correct":{"lens":1}
,"lens":{"vignetting":1}
,"gradient":{"used":1}
,"used":{"lighten":1}
,"lighten":{"darken":1}
,"darken":{"edges":1}
,"spot":{"section":1,"controls":1}
,"section":{"common":1}
,"common":{"filter":1}
,"filter":{"controls":1}
,"controls":{"spot":1,"work":1}
}
;Search.control.loadWordPairs(pairs);