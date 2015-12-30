var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "350000",
        "ok": "349231",
        "ko": "769"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "67311",
        "ok": "67311",
        "ko": "63344"
    },
    "meanResponseTime": {
        "total": "1840",
        "ok": "1712",
        "ko": "59882"
    },
    "standardDeviation": {
        "total": "5764",
        "ok": "5082",
        "ko": "4376"
    },
    "percentiles1": {
        "total": "62",
        "ok": "62",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "1080",
        "ok": "1078",
        "ko": "60006"
    },
    "percentiles3": {
        "total": "7474",
        "ok": "7445",
        "ko": "61193"
    },
    "percentiles4": {
        "total": "31097",
        "ok": "31075",
        "ko": "63185"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 236626,
        "percentage": 68
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 32862,
        "percentage": 9
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 79743,
        "percentage": 23
    },
    "group4": {
        "name": "failed",
        "count": 769,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2713.936",
        "ok": "2707.973",
        "ko": "5.963"
    }
},
contents: {
"req_hello-5d414": {
        type: "REQUEST",
        name: "hello",
path: "hello",
pathFormatted: "req_hello-5d414",
stats: {
    "name": "hello",
    "numberOfRequests": {
        "total": "350000",
        "ok": "349231",
        "ko": "769"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "67311",
        "ok": "67311",
        "ko": "63344"
    },
    "meanResponseTime": {
        "total": "1840",
        "ok": "1712",
        "ko": "59882"
    },
    "standardDeviation": {
        "total": "5764",
        "ok": "5082",
        "ko": "4376"
    },
    "percentiles1": {
        "total": "62",
        "ok": "62",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "1080",
        "ok": "1078",
        "ko": "60006"
    },
    "percentiles3": {
        "total": "7474",
        "ok": "7444",
        "ko": "61193"
    },
    "percentiles4": {
        "total": "31096",
        "ok": "31075",
        "ko": "63185"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 236626,
        "percentage": 68
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 32862,
        "percentage": 9
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 79743,
        "percentage": 23
    },
    "group4": {
        "name": "failed",
        "count": 769,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2713.936",
        "ok": "2707.973",
        "ko": "5.963"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
