class Playlist < ApplicationRecord

    has_one_attached :image

    validates :title, :creator_id, :creator_type, presence: true

    has_many :contents, 
    through: :playlist_content

    belongs_to :creator, polymorphic: true
    
end