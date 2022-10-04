class User < ApplicationRecord
    
    # Use the 'bcrypt'gem to encrypt passwords at the point of
    # creating a new user object - this will happen transparently,
    # and then we ONLY store the encrypted version ('digest')
    # NEVER the 'plaintext'
    # To use this system, when we create a user we specify the 
    # field 'password': "chicken" ', but it will SAVED in a field
    # called 'password_digest'
    # i.e.
    # User.create! email: 'user@ga.co', password: 'chicken'
    # --------------------------------> password_digest: '18273918ahsdkjb123'

    validates :name, length: { minimum: 2 }
    #Don't allow a user.create to proceed when the email field left blank
    validates :email, presence: true, uniqueness: true

    has_secure_password
    
    has_many :mixtapes

    # advanced associations

    # we want users to be able to follow other users
    # ... the standard follow is asymmetrical / non reciprocal

    # ie following users which doesnt automatically follow you !

    # If follow WAS symmetrical, then this would just require a join table
    # because a follow involves two different kinds of user,
    #   a follower, (initiates the follow, IS following)
    #   and a being-followed (is pasively followed, ie being followed)
    # we need a seperate model to track who is follower and who is followed

    # rails g model Follow follower_id:integer followed_id:integer

    # Now we can say:
    has_many :following_relationships, class_name: 'Follow', foreign_key: 'follower_id'
    has_many :followed_relationships, class_name: 'Follow', foreign_key: 'followed_id'

    # To create a new Follow between users, we would have to write:
    #   Follow.create follower_id: 18, followed_id: 19
    # or similar
    # and then to find the first user you are following, we need to write:
    # User.first.following_relationships.first.followed

    # To avoid this awkward syntax, we can just use a 'through' association
    # 

    has_many :following, through: :following_relationships, source: :followed
    has_many :followers, through: :followed_relationships, source: :follower

    # now to find out who a suer follows we can just say:
    #   User.first.following # => array of user objects i am following
    #   User.first.followers # => array of user objects who are following me

    # To start following another user, we now don't even have to mention the 'Follow' model
    # at all, it has become invisible.
    # We just use the '<<' push syntax:
    #
    # User.first.following << User.third

    # @current_user.follow_safe( User.find(params[:id]) )

    def follow_safe( user_to_follow )

        if self.first.following.include? user_to_follow 
            return false # already following them
        else
            self.following << user_to_follow # create the association (actually a new row in the 'follows' table)
            return true # Just to indicate that the follow was successful
        end
    
    end

    
end
