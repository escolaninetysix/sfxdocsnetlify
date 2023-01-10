export default 
[
    {
        "title" : "Suite",
        "type" : "replace",
        "message" : "Upgrade your bundle to the Boris FX Suite and gain access to all of our most powerful plugins",
        "header" : "Switch to Suite",
        "cta" : "Upgrade",
        "logic": [
            {   
                "id" : "block0",
                "logicLines": [
                    {
                        "id" : "line1",
                        "search" : "product",
                        "compareA" : "collection",
                        "operator" : "==",
                        "compareB" : "Sapphire, Continuum, Mocha Pro, Silhouette, Optics"
                    },
                    {
                        "id" : "line1",
                        "search" : "product",
                        "compareA" : "type",
                        "operator" : "==",
                        "compareB" : "New License, Annual Subscription, Monthly Subscription"
                    },
                ]
            },
        ],
        "upsellProduct" : {
            "sku" : "SUITES"
        }
    },
]