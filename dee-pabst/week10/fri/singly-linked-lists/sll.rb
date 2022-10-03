# THOUGHT EXPERIMENT
# What if.. there were no Arrays?
# OR
# What if you couldn't change the number of items in an array
# (no dynamic memory allocation)
# JS & Ruby are 'high-level' interpreted langs
# they provide a relatively abstracted/managed access
# to a computer memory
#
# C is low-level, compiled language which
# requires the programmer to manage memory
# allocation manually
#       int ages(10);

# "Data container" class:
# a box for storing a few pieces of data in
# doesn't have behaviour (methods) of its own

# quick reload of the file
def r
  puts "Reloading..."
  load "./sll.rb"
end

class SLL

  # Keep track of the first node in the list;
  # from this we can advance via '.next' to
  # visit all the following nodes, one at a time
  attr_accessor :head, :length

  def initialize(val)
    # Create an instance(an object) of the Node class
    # give it the val arg as its data
    # then store the new node in the @head attribute
    @length = 1
    @head = Node.new val
  end # initialize

  def prepend(val)
    @length = @length + 1
    new_node = Node.new val
    # .. since we a prepending the original start
    # of the list is now the 'next'
    # item for this new first item
    new_node.next = @head

    #update the length of the list
    self.length

    # return the new @head
    @head = new_node
  end

  # create a new node with a specified value and add it to the end of the
  # TODO: add a '@tail' or '@end' variable to track the last node
  def append(val)
    @length = @length + 1
    new_node = Node.new val

    # loop through all the nodes in the list
    # until we find the end, i.e. the node
    # whose .next value is 'nil'

    # start looping at the start of the list
    current_node = @head

    while current_node.next != nil
      current_node = current_node.next  # i++
    end # while

    # current_node is now the last node in the list,
    # i.e. its .next is nil
    current_node.next = new_node
  end # append

  def to_s
    output = ""

    current_node = @head
    while current_node != nil
      output += current_node.data + ", "
      current_node = current_node.next # advance to next node
    end # while

    output # last expression is returned in ruby
  end # to_s

  # find and return the entire node whose 'data' is
  # the specified 'needle' argument
  def find(needle)
    current_node = @head
    while current_node != nil
      if current_node.data == needle
        return current_node
      end # if
      current_node = current_node.next #advance to next node
    end # while
  end #find

  # Create a node
  # Set 'val' as its data,
  # Splice it into the list after the given node
  # Add the rest of the list to the new node (important!)
  def insert_after(node, val)
    @length = @length + 1
    new_node = Node.new val

    # The new node points to the insert-after nodes next node
    new_node.next = node.next
  end # insert_after

  # return the length of the list
  # involved iteration
  # BONUS: make a new instance variable @length
  # whose job is to know the current length
  # don't forget to update it after any change
  # to the length of the list
  def length

    # I removed this loop and updated the length
    # class variable when a node was added

    # puts self
    # length = 0
    # current_node = @head
    # while current_node != nil
    #   length += 1
    #   current_node = current_node.next # advance to next node
    # end # while
    # # last expression is returned in ruby
    # @length = length

    @length
  end

  # Array-like access to the node at position n,
  # starting at zero; return the whole node
  # def [](n)
  def at_index(n)
    # handle bad input? below zero or above length
    # return the node
    if n <= @length
      current_node = @head
    else
      return nil
    end

    # start at n, count down until we find the last node
    while n != 0
      n -= 1
      current_node = current_node.next # advance to next node
    end # while
    current_node
  end

  # returns a reversed version of the list;
  # NON-DESTRUCTIVE - do not modify the original
  # list to which the method is applied
  def reverse
    current_node = @head
    output = ""
    while current_node != nil
      output = current_node.data + ", " + output
      current_node = current_node.next # advance to next node
    end # while
    output
  end

  #destructive version of reverse, DOES change
  #the list to which it's applied i.e changes 'self'
  def reverse!
  end

  # Remove the first node from the list (destructively)
  # and return the node
  def shift
  end

  # Remove the specified node from the list;
  # make sure you don't break the chain!
  # this will involve some iteration in order to
  # find the node BEFORE the one being deleted
  def delete(node_to_delete)
  end

  # remove the node at the specified pos
  # (i.e. you don't already have a node from the list)
  # - make sure you don't break the chain
  # - this one can use at_index() for
  def delete_at(n)
  end

  # implement the each method:
  # must accept a block,
  # and run the block for every
  # item in the list, giving current
  # item to block as a block variable
  # look into 'yield' and 'block_given?'
  #
  # if you get that working, look into the 'Enumerable' mixin
  # .. which will give you iteration methods like .map,
  # .filter/select, .find for free!
  def each
  end

  # as above, expects a block and runs the block for each
  # node in the list, but returns an arrau of those values
  # as transformed by the block
  # simplest case will be like .to_a
  #
  def map
  end

  class Node

    #TODO: research 'Struct' that
    # that lets you create a data container class
    # in a single line:
    # Node = Struct.new( :data, :next)

    attr_accessor :data, :next

    #   # getter
    #   def data
    #     @data
    #   end

    #   # setter
    #   def data=(new_val)
    #     @data = new_val
    #   end

    def initialize(val)
      # set the initial value for the data
      #attribute
      # node = Node.new 'my data'
      @data = val
    end # initialize
  end # class Node
end # class SLL

# Make a test list to debug with
list = SLL.new "Morty"
list.prepend "Rick"
list.prepend "Summer"
list.append "Jerry"

# Summer -> Rick -> Morty -> Jerry

require "pry"
binding.pry # pause here in pry
