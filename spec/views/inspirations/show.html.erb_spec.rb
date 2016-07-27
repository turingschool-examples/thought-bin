require 'rails_helper'

RSpec.describe "inspirations/show", type: :view do
  before(:each) do
    @inspiration = assign(:inspiration, Inspiration.create!(
      :name => "Name",
      :link => "Link",
      :inspired => false
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Link/)
    expect(rendered).to match(/false/)
  end
end
