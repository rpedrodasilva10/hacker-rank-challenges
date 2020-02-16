

def efficientJanitor(weight):
    dp = [1] * len(weight)
    currWeightSum = weight[0]

    for i in range (1, len(dp)):
        if (currWeightSum + weight[i] > 3):
            dp[i] = dp[i - 1] + 1
            currWeightSum = weight[i]
        else:
            currWeightSum += weight[i]
            dp[i] = dp[i - 1]
    
    print(dp[len(dp) - 1])

arr = [2.99, 3.0,3.0]
efficientJanitor(arr)