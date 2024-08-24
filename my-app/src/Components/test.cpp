#include<iostream>
using namespace std;
void array_permutation(int arr[], int size){
    bool* values = new bool[size]();
    for(int i = 0; i < size; i++){
         bool isdup = false;
        if(values[i]){
        for(int j = 0; j < size; j++){
            if(i!=j && arr[i] == arr[j]){
                isdup = true;
            }
        }
        }
        if(isdup){
            cout<<arr[i]<<" ";
            for(int k = 0; k < size; k++){
                if(arr[i] == arr[k]){
                    values[k] = true;
                }
            }
        }
    }
}
int main()
{
    int arr[4] = {4,1,4,2};
    array_permutation(arr,4);

    return 0;
}