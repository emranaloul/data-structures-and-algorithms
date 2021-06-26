# Hashtables

Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.

## Challenge

Implement a Hashtable Class with the following methods:
- add
    Arguments: key, value
    Returns: nothing
    This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get
    Arguments: key
    Returns: Value associated with that key in the table
- contains
    Arguments: key
    Returns: Boolean, indicating if the key exists in the table already.
- hash
    Arguments: key
    Returns: Index in the collection for that key
## Approach & Efficiency
1. ***add(key,value)*** ->     Time: O(1).
                               Space: O(1).
2. ***get(key)*** ->           Time: O(logn).
                               Space: O(N).
3. ***getOne(key)*** ->        Time: O(logn).
                               Space: O(1).
4. ***contains(key)*** ->      Time: O(logn).
                               Space: O(1).
5. ***hash(key)*** ->          Time: O(N).
                               Space: O(1).
## API
1. ***add(key,value)***
This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
2. ***get(key)***
Returns values associated with that key in the table.
3. ***getOne(key)***
Returns the value associated with that key in the table and avoiding collisions as needed.
4. ***contains(key)***
Returns boolean, indicating if the key exists in the table already.
5. ***hash(key)***
Returns index in the collection for that key.