class AirlineSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :slug, :avg_score

  attribute :average_score do |object|
    (object.average_score.to_f / 100).to_f.round(2)
  end
  
  has_many :reviews
end
