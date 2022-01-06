class User < ApplicationRecord

    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :birthday, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :gender, presence: true, inclusion: {in: %w(Male Female Non-binary)}

    attr_reader :password

    after_initialize :ensure_session_token

    has_one_attached :avatar, service: :s3

    has_many :playlists, as :creatable

    def self.find_by_credentials(id, password)
        user_ =  User.where(username: id).or(User.where(email: id))[0]
        user = User.find(user_.id) if user_
        user && user.is_password?(password) ? user : nil
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

end