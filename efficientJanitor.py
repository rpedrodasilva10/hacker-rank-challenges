def efficientJanitor(weight):
    trips = [1] * len(weight)
    weight_sum = weight[0]

    for i in range (1, len(trips)):
        if (weight_sum + weight[i] > 3):
            trips[i] = trips[i - 1] + 1
            weight_sum = weight[i]
        else:
            weight_sum += weight[i]
            trips[i] = trips[i - 1]
    
    return (trips[len(trips) - 1])

weights = [2.99,1,1, 1,  3.0,3.0]
efficientJanitor(weights)