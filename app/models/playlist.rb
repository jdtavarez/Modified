class Playlist < ApplicationRecord

    has_one_attached :image

    validates :title, :creator_id, :creator_type, presence: true

    has_many :playlist_contents,
    foreign_key: :playlist_id,
    class_name: :PlaylistContent

    has_many :contents, 
    through: :playlist_contents,
    source: :content

    belongs_to :creator, polymorphic: true
    
end