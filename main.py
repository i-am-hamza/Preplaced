arr = [1, 2, 3, 4]

def removeElement(value):
    print(arr)
    for i in arr:
        if arr[i] == value:
            arr[i] = arr[i+1]           
    return arr


removeElement(2)
print(arr)


