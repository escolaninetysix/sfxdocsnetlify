var pairs =
{
"overexpose":{"simulates":1}
,"simulates":{"overexposure":1}
,"overexposure":{"occurs":1}
,"occurs":{"film":1}
,"film":{"camera":1,"lab":1}
,"camera":{"stopped":1}
,"node":{"group":1}
,"select":{"preset":1}
,"preset":{"choose":1}
,"choose":{"presets":1}
,"presets":{"tab":1}
,"controls":{"amount":1}
,"amount":{"overexposure":1}
,"sets":{"intensity":1,"softness":1}
,"intensity":{"overexposure":1}
,"softness":{"overexposure":1}
}
;Search.control.loadWordPairs(pairs);