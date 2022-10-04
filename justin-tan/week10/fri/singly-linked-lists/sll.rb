
# THOUGHT EXPERIMENT

# WHat if you didn't have arrays in a language?

# OR

# What if you could't change the number of items in an array?

# (no dynamic memory allocation)

# JS & Ruby are 'high-level' interpreted languages
# they provide a relatively abstracted/managed access to computer memory

# C is a low-level, compiled language which requires the programmer to manage memory allocation manually
# int ages[10]

# quick alias for reloading this file when in pry - just for debugging
# def r 
#   puts "Reloading..."
#   load './sll.rb'
# end

class SLL

  # keep track of the first node in the list; from
  # this we can advance via '.next' to visit all
  # the following nodes, one at a time

  attr_accessor :head

  def initialize( val )
    # create an instance of the Node class,
    # and give it the 'val' argument as its
    # data; then store this new first node
    # in the @head attribute

    # ----- TRYING OUT TAIL
    # new_node = Node.new val
    # @head = new_node
    # @tail = new_node

    @head = Node.new val

  end

  # This method will create a new Mode, assign 'val' # as its data, and....
  def prepend( val )
    new_node = Node.new val

    # ... since we are prepending, the original
    # start of the list is now the 'next' item
    # for this new first item
    new_node.next = @head
    @head = new_node

    # WHOOPS:
    # @head = new_node
    # new_node.next = ????

  end

  # Create a new node with the specified value as it's data and add it to the END of the list, i.e. make it .next of the current last node in the list
  # But... we don't HAVE the end of the list
  # we only have the @head (the start)

  # TODO: add a "@tail" or "@end" instance variable that 
  # keeps track of the last node in the last, saving us
  # from having to iterate through the whole list at O(N)
  # just to add something to the end;
  # don't forget to keep this new pointer variable up to date
  # when you append, insert, delete etc from the end.
  def append( val )
    new_node = Node.new val

    # loop through all the nodes in the list
    # until we find the end, i.e. the node whose
    # .next value is 'nil'

    # start looping at the start of the list, using a
    # variable to keep track of where we are in the list
    current_node = @head

    # as long as we haven't reached the last node..
    while current_node.next != nil
      # ...advance the loop pointer to the next node in the list
      current_node = current_node.next # i++
    end # while

    # current_node is now the last node in the list
    # ie its .next is nil
    current_node.next = new_node # new_node is the new end!

    # @tail.next = new_node
    # @tail = new_node

  end # append

  # def print
  # if we define to_s, it will be used by methods like 
  # puts to generate the string representation of this list
  # .... also by string interpolation!
  def to_s

    output = ''

    current_node = @head

    while current_node != nil
      output += current_node.data + ', '
      current_node = current_node.next # advance to next node
    end

    output # implicit return of the final string

  end # print

  # Find (and return) the entire node whose 'data' is the 
  # specified needle argument
  def find( needle )

    current_node = @head

    while current_node != nil
      if current_node.data == needle
        return current_node
      end
      current_node = current_node.next
      'this is the last thing in the loop'
    end

    # nil # return???

  end

  # create a new node, set the 'val' arg as its data,
  # and 'splice' it into the after given 'node',
  # and don't forget to add the rest of the list onto
  # the end of the new node
  def insert_after( node, val )

    new_node = Node.new val

    # Our new node points to the insert-after node's
    # next node
    new_node.next = node.next

    # The insert-after node's next now becomes
    # our new node
    node.next = new_node

  end # insert_after

  # Homework: implement these methods:
   
  # Return the length of the list
  # - this will initially involve iteration
  # - BONUS: make a new instance variable @length
  # whose job is to know the current length,
  # and don't forget to update it after any change to the length of the list

  def length

    current_node = @head
    length = 0

    while current_node != nil
      length += 1
      current_node = current_node.next
    end
    
    length

  end # length

  # Array-like access to the node at position n,
  # starting at zero; return whole node
  # def []( n )
  def at_index(n)

    current_node = @head

    # if n = 0, return the first (@head) node
    if n == 0
      return current_node
    end

    length = 0

    # loop through the list until n == length, return current_node

    while current_node != nil
      length += 1
      current_node = current_node.next

      if length == n
        return current_node
      end
    end

  end # at_index

  # Retruns a reversed version of the list;
  # NON-DESTRUCTIVE - do not modify the original
  # list to which this method is applied
  def reverse

    current_node = @head

    reversed_list = SLL.new current_node.data
    
    while current_node.next != nil

      reversed_list.prepend current_node.next.data
      current_node = current_node.next

    end

    reversed_list
    
  end # reverse

  # destructive version of reverse, DOES change the
  # list to which it's applied, i.e. changes 'self'
  def reverse!

    # is this cheating??
    @head = reverse.at_index(0)

  end

  # Remove the first node from the list (destructively)
  # and return the node
  def shift
  
    # is this also cheating??
    second_node = @head.next 
    @head = second_node

  end

  # remove the specified node from the list;
  # make sure you don't break the chain!
  # This will involve some iteration in order to
  # find the node BEFORE the one we're deleting
  # (this wouldn't be necessary in a Doubly-Linked List)
  def delete( node_to_delete )

    current_node = @head
    delete_node = self.find node_to_delete

    while current_node != nil 
      if current_node.next == delete_node

        current_node.next = current_node.next.next

      end
    current_node = current_node.next

    end

  end # delete

  # Remove the node at the specified position
  # (i.e. you don't already have a node from the list)
  # - make sure you don't break the chain
  # - this one can use at_index() for
  def delete_at( n )

    current_node = @head
    delete_node = self.at_index n

    while current_node != nil
      if current_node.next == delete_node

        current_node.next = current_node.next.next

      end
    current_node = current_node.next

    end

  end

  # Implement the each method: your version of .each
  # must accept a block, and run that block for every item
  # in the list, giving the current item to the block
  # as a block variable
  # - look into 'yield' and 'block_given?'

  # If you get that working, look into the 'Enumerable' mixin
  def each

    current_node = @head
    
    # replaces "yield" code with the block code when it is looped each time
    while current_node != nil
      yield current_node.data if block_given?
      current_node = current_node.next
    end

    # while loop, plus yield
  end

  # as above, expects a block and runs the block for each 
  # node in the list, but returns an array of those values
  # as transformed by the block
  #
  # ... simplest case will be like .to_a
  def map

    current_node = @head
    array = []

    # how to use .to_a?
    while current_node != nil

      array.push yield current_node.data if block_given?
      current_node = current_node.next

    end
    array
    
  end


  # "Data container" class:
  # really just a box for storing a few pieces
  # of data in, doesn't have much behaviour
  # (methods) of its own
  class Node 

    # TODO: research "Struct" that lets you create
    # a data container class in a single line:
    #   Node = Struct.new(:data, :next)
    
    attr_accessor :data, :next

    # getter
    # def data
    #   @data
    # end

    # # setter
    # def data=(new_val)
    #   @data = new_val
    # end

    def initialize( val )
      # Set an initial value for the @data attribute
      # node = Node.new 'my data'
      @data = val
    end

  end # class Node

end # class SLL


# Make a test list to play with when debugging
list = SLL.new 'Morty'
list.prepend 'Rick'
list.prepend 'Summer'
list.append 'Jerry'

# Summer -> Rick -> Morty

# test yield

# def yield_with_arguments
#   hello = "Hello"
#   world = "World"

#   yield(hello, world)
# end

# def each 
#   puts "hello"
#   yield
#   puts "world"
# end

# each { |el| puts "#{el} there"}

# yield_with_arguments { |hello| puts "#{hello} #{hello}" }


require 'pry'
binding.pry; # pause here in pry