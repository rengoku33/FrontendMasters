## objects
<img width="1130" height="710" alt="image" src="https://github.com/user-attachments/assets/3c91ec8f-0bed-4abf-b68c-02d32e88a0bd" />

## Searching:  
- linear search - O(n) (walk one by one)
- binary search - O(log n) (must be sorted - check middle and decrease window)
  <img width="658" height="331" alt="image" src="https://github.com/user-attachments/assets/713e9065-f220-4f52-9240-a111a13b2278" />

### Two crystal balls problem: 
you got 2 balls dropped from a building [boolean array], find the index where the ball starts to break  
1. brute force: can solve by skipping a step O(n/2) if it breaks then drop in prev floor
2. optimal: drop it in sqrt of n (length of arr), if it breaks then start the other ball from the last successful index O(root of n)
<img width="646" height="302" alt="image" src="https://github.com/user-attachments/assets/86121d98-196a-40a1-9807-882fcf3cd931" />

## Sorting:
- bubble sort - O(n^2) (check i and i+1 and swap, make the window smaller by excluding the last element on next iteration)  
  just a 3 line algorithm, i must be able to craft it on a crashing plane too quickly
  <img width="664" height="321" alt="image" src="https://github.com/user-attachments/assets/24596494-6c9f-43d9-8d28-010809c2612f" />

- 
