var pairs =
{
"ocio":{"display":1,"configuration":1,"silhouette":1}
,"determines":{"transform":1}
,"transform":{"occurs":1}
,"occurs":{"input":1}
,"input":{"scene\u2019s":1,"colorspace":1}
,"scene\u2019s":{"colorspace":1}
,"colorspace":{"display":1,"scene":1,"select":1,"matches":1}
,"display":{"colorspace":1,"device":1,"transform":1}
,"node":{"group":1}
,"sets":{"path":1,"input":1,"transform":1}
,"path":{"global":1}
,"global":{"ocio":1}
,"configuration":{"file":1}
,"file":{"default":1}
,"default":{"ocio":1}
,"silhouette":{"initially":1}
,"initially":{"look":1}
,"look":{"$sfx_ocio":1}
,"$sfx_ocio":{"first":1}
,"view":{"transform":1}
,"select":{"colorspace":1,"srgb":1}
,"matches":{"display":1}
,"device":{"select":1}
,"srgb":{"rec709":1}
,"rec709":{"none":1}
,"adjusts":{"brightness":1,"gamma":1}
,"brightness":{"image":1}
,"image":{"f-stops":1,"gamma":1}
,"f-stops":{"gain":1}
,"gain":{"applied":1}
,"applied":{"display":1}
,"gamma":{"image":1,"applied":1}
}
;Search.control.loadWordPairs(pairs);
