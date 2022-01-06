class Playlist < ApplicationRecord

    has_one_attached :image, service: :s3

    validates :title, :creator_id, :creator_type presence: true
    validates :description

    has_many :songs, 
    through: :playlist_content

    belongs_to :creatable, polymorphic: true
    
end