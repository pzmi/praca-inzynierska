var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "260",
        "ko": "740"
    },
    "minResponseTime": {
        "total": "5892",
        "ok": "5892",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60014",
        "ok": "59941",
        "ko": "60014"
    },
    "meanResponseTime": {
        "total": "52915",
        "ok": "32721",
        "ko": "60010"
    },
    "standardDeviation": {
        "total": "14326",
        "ok": "15440",
        "ko": "1"
    },
    "percentiles1": {
        "total": "60011",
        "ok": "32751",
        "ko": "60011"
    },
    "percentiles2": {
        "total": "60011",
        "ok": "45996",
        "ko": "60011"
    },
    "percentiles3": {
        "total": "60011",
        "ok": "56091",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "60011",
        "ok": "58727",
        "ko": "60012"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 260,
        "percentage": 26
    },
    "group4": {
        "name": "failed",
        "count": 740,
        "percentage": 74
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "6.253",
        "ok": "1.626",
        "ko": "4.627"
    }
},
contents: {
"req_fibonacci-ef15d": {
        type: "REQUEST",
        name: "fibonacci",
path: "fibonacci",
pathFormatted: "req_fibonacci-ef15d",
stats: {
    "name": "fibonacci",
    "numberOfRequests": {
        "total": "1000",
        "ok": "260",
        "ko": "740"
    },
    "minResponseTime": {
        "total": "5892",
        "ok": "5892",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60014",
        "ok": "59941",
        "ko": "60014"
    },
    "meanResponseTime": {
        "total": "52915",
        "ok": "32721",
        "ko": "60010"
    },
    "standardDeviation": {
        "total": "14326",
        "ok": "15440",
        "ko": "1"
    },
    "percentiles1": {
        "total": "60011",
        "ok": "32751",
        "ko": "60011"
    },
    "percentiles2": {
        "total": "60011",
        "ok": "45996",
        "ko": "60011"
    },
    "percentiles3": {
        "total": "60011",
        "ok": "56091",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "60011",
        "ok": "58727",
        "ko": "60012"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 260,
        "percentage": 26
    },
    "group4": {
        "name": "failed",
        "count": 740,
        "percentage": 74
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "6.253",
        "ok": "1.626",
        "ko": "4.627"
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
