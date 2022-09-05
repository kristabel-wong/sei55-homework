require 'test_helper'

class ZoosControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get zoos_new_url
    assert_response :success
  end

  test "should get create" do
    get zoos_create_url
    assert_response :success
  end

  test "should get index" do
    get zoos_index_url
    assert_response :success
  end

  test "should get show" do
    get zoos_show_url
    assert_response :success
  end

  test "should get edit" do
    get zoos_edit_url
    assert_response :success
  end

  test "should get update" do
    get zoos_update_url
    assert_response :success
  end

  test "should get destroy" do
    get zoos_destroy_url
    assert_response :success
  end

end
