class User < ApplicationRecord
    has_many :comments 
    has_many :posts
    has_many :songs, through: :posts
    # has_secure_password
    validates :username, presence: {message: "must be present"}
    validates :username, uniqueness: true
end
