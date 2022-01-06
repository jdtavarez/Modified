class Playlist < ApplicationRecord

    validates :title, :creator_id, :creator_type presence: true
    validates :description

    has_many :songs, 
    through: :playlist_content

    belongs_to :artist,
    foreign_key :creator_id,
    class_name: :Artist

    belongs_to :creatable, polymorphic: true
    
end