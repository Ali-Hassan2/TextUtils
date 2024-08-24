#include<iostream>
using namespace std;
int main(){
    string ans = "Heeloo g";
    string new_ans = "";
    for(int i = 8; i >=0; i--){
        // cout<<ans[i];
        new_ans = ans[i];
        cout<<new_ans;
    }
    
    return 0;
}