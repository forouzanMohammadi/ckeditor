<?php
/**
 * Elementor Widget
 * @package Appside
 * @since 1.0.0
 */

namespace Elementor;
class Appside_Testimonial_Nine_Widget extends Widget_Base {

	/**
	 * Get widget name.
	 *
	 * Retrieve Elementor widget name.
	 *
	 * @return string Widget name.
	 * @since 1.0.0
	 * @access public
	 *
	 */
	public function get_name() {
		return 'appside-testimonial-nine-widget';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve Elementor widget title.
	 *
	 * @return string Widget title.
	 * @since 1.0.0
	 * @access public
	 *
	 */
	public function get_title() {
		return esc_html__( 'Testimonial: 09', 'aapside-master' );
	}

	/**
	 * Get widget icon.
	 *
	 * Retrieve Elementor widget icon.
	 *
	 * @return string Widget icon.
	 * @since 1.0.0
	 * @access public
	 *
	 */
	public function get_icon() {
		return 'eicon-blockquote';
	}

	/**
	 * Get widget categories.
	 *
	 * Retrieve the list of categories the Elementor widget belongs to.
	 *
	 * @return array Widget categories.
	 * @since 1.0.0
	 * @access public
	 *
	 */
	public function get_categories() {
		return [ 'appside_widgets' ];
	}

	/**
	 * Register Elementor widget controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function _register_controls() {

		$this->start_controls_section(
			'settings_section',
			[
				'label' => esc_html__( 'General Settings', 'aapside-master' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control( 'testimonial_items', [
			'label'       => esc_html__( 'Testimonial Item', 'aapside-master' ),
			'type'        => Controls_Manager::REPEATER,
			'default'     => [
				[
					'name'        => esc_html__( 'Riley Cassidy', 'aapside-master' ),
					'designation' => esc_html__( 'Client', 'aapside-master' ),
					'description' => esc_html__( 'Inspiration comes in many ways and you like to save everything from. sed do exercitation.', 'aapside-master' )
				],
				[
					'name'        => esc_html__( 'Riley Cassidy', 'aapside-master' ),
					'designation' => esc_html__( 'Technician', 'aapside-master' ),
					'description' => esc_html__( 'Inspiration comes in many ways and you like to save everything from. sed do exercitation.', 'aapside-master' )
				],
			],
			'fields'      => [
				[
					'name'        => 'name',
					'label'       => esc_html__( 'Name', 'aapside-master' ),
					'type'        => Controls_Manager::TEXT,
					'description' => esc_html__( 'enter name', 'aapside-master' ),
					'default'     => esc_html__( 'Lara Croft', 'aapside-master' )
				],
				[
					'name'        => 'designation_status',
					'label'       => esc_html__( 'Designation Show/Hide', 'aapside-master' ),
					'type'        => Controls_Manager::SWITCHER,
					'description' => esc_html__( 'show/hide designation', 'aapside-master' ),
				],
				[
					'name'        => 'designation',
					'label'       => esc_html__( 'Designation', 'aapside-master' ),
					'type'        => Controls_Manager::TEXT,
					'description' => esc_html__( 'enter designation', 'aapside-master' ),
					'default'     => esc_html__( 'CEO, Appside', 'aapside-master' ),
					'condition'   => [ 'designation_status' => 'yes' ]
				],
				[
					'name'        => 'ratings',
					'label'       => esc_html__( 'Ratings Show/Hide', 'aapside-master' ),
					'type'        => Controls_Manager::SWITCHER,
					'description' => esc_html__( 'show/hide ratings', 'aapside-master' ),
				],
				[
					'name'        => 'ratings_count',
					'label'       => esc_html__( 'Ratings', 'aapside-master' ),
					'type'        => Controls_Manager::SELECT,
					'options'     => [
						'1' => esc_html__( '1 star', 'aapside-master' ),
						'2' => esc_html__( '2 star', 'aapside-master' ),
						'3' => esc_html__( '3 star', 'aapside-master' ),
						'4' => esc_html__( '4 star', 'aapside-master' ),
						'5' => esc_html__( '5 star', 'aapside-master' ),
					],
					'description' => esc_html__( 'set ratings', 'aapside-master' ),
					'condition'   => [ 'ratings' => 'yes' ]
				],
				[
					'name'        => 'description',
					'label'       => esc_html__( 'Description', 'aapside-master' ),
					'type'        => Controls_Manager::TEXTAREA,
					'description' => esc_html__( 'enter description', 'aapside-master' ),
					'default'     => esc_html__( 'Inspiration comes in many ways and you like to save everything from. sed do exercitation.', 'aapside-master' )
				]

			],
			'title_field' => '{{name}}'
		] );
		$this->end_controls_section();

		$this->start_controls_section(
			'slider_settings_section',
			[
				'label' => esc_html__( 'Slider Settings', 'aapside-master' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			]
		);
		$this->add_control(
			'items',
			[
				'label'       => esc_html__( 'Items', 'aapside-master' ),
				'type'        => Controls_Manager::TEXT,
				'description' => esc_html__( 'you can set how many item show in slider', 'aapside-master' ),
				'default'     => '1'
			]
		);
		$this->add_control(
			'margin',
			[
				'label'       => esc_html__( 'Margin', 'aapside-master' ),
				'description' => esc_html__( 'you can set margin for slider', 'aapside-master' ),
				'type'        => Controls_Manager::SLIDER,
				'range'       => [
					'px' => [
						'min'  => 0,
						'max'  => 100,
						'step' => 5,
					]
				],
				'default'     => [
					'unit' => 'px',
					'size' => 0,
				],
				'size_units'  => [ 'px' ]
			]
		);
		$this->add_control(
			'loop',
			[
				'label'       => esc_html__( 'Loop', 'aapside-master' ),
				'type'        => Controls_Manager::SWITCHER,
				'description' => esc_html__( 'you can set yes/no to enable/disable', 'aapside-master' ),
				'default'     => 'yes'
			]
		);
		$this->add_control(
			'autoplay',
			[
				'label'       => esc_html__( 'Autoplay', 'aapside-master' ),
				'type'        => Controls_Manager::SWITCHER,
				'description' => esc_html__( 'you can set yes/no to enable/disable', 'aapside-master' ),
				'default'     => 'yes'
			]
		);
		$this->add_control(
			'autoplaytimeout',
			[
				'label'      => esc_html__( 'Autoplay Timeout', 'aapside-master' ),
				'type'       => Controls_Manager::SLIDER,
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 10000,
						'step' => 2,
					]
				],
				'default'    => [
					'unit' => 'px',
					'size' => 5000,
				],
				'size_units' => [ 'px' ],
				'condition'  => array(
					'autoplay' => 'yes'
				)
			]
		);
		$this->end_controls_section();

		$this->start_controls_section( 'icon_styling_section', [
			'label' => esc_html__( 'Icon Styling Settings', 'aapside-master' ),
			'tab'   => Controls_Manager::TAB_STYLE
		] );
		$this->add_responsive_control(
			'icon_right_space',
			[
				'label'      => esc_html__( 'Icon Left Space', 'aapside-master' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 100,
						'step' => 1,
					],
					'%'  => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .single-testimonial-item-09 .icon' => 'left: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_control( 'icon_color', [
			'type'      => Controls_Manager::COLOR,
			'label'     => esc_html__( 'Icon Color', 'aapside-master' ),
			'selectors' => [
				"{{WRAPPER}} .single-testimonial-item-09 .icon" => "color: {{VALUE}}"
			]
		] );
		$this->end_controls_section();


		$this->start_controls_section( 'styling_section', [
			'label' => esc_html__( 'Styling Settings', 'aapside-master' ),
			'tab'   => Controls_Manager::TAB_STYLE
		] );

		$this->add_group_control( Group_Control_Background::get_type(), [
			'label'    => esc_html__( 'Background', 'aapside-master' ),
			'name'     => 'content_backaground',
			'selector' => "{{WRAPPER}} .single-testimonial-item-09"
		] );
		$this->add_control(
			'content_padding',
			[
				'label'      => esc_html__( 'Content Padding', 'aapside-master' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors'  => [
					'{{WRAPPER}} .single-testimonial-item-09 .content-area' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'content_border_radius',
			[
				'label'      => esc_html__( 'Content Border Radius', 'aapside-master' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors'  => [
					'{{WRAPPER}} .single-testimonial-item-09 .content-area' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'ratigs_top_gap',
			[
				'label'      => esc_html__( 'Ratings Top Gap', 'aapside-master' ),
				'type'       => Controls_Manager::SLIDER,
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 500,
						'step' => 2,
					],
					'%'  => [
						'min'  => 0,
						'max'  => 500,
						'step' => 2,
					]
				],
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					"{{WRAPPER}} .single-testimonial-item-09 .content-area .ratings" => 'margin-top: {{SIZE}}{{UNIT}};'
				]
			]
		);
		$this->add_control(
			'description_top_gap',
			[
				'label'      => esc_html__( 'Description Top Gap', 'aapside-master' ),
				'type'       => Controls_Manager::SLIDER,
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 500,
						'step' => 2,
					],
					'%'  => [
						'min'  => 0,
						'max'  => 500,
						'step' => 2,
					]
				],
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					"{{WRAPPER}} .single-testimonial-item-09 .content-area p" => 'margin-top: {{SIZE}}{{UNIT}};'
				]
			]
		);
		$this->add_control(
			'ratings_between_gap',
			[
				'label'      => esc_html__( 'Ratings Between Gap', 'aapside-master' ),
				'type'       => Controls_Manager::SLIDER,
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 500,
						'step' => 2,
					],
					'%'  => [
						'min'  => 0,
						'max'  => 500,
						'step' => 2,
					]
				],
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					"{{WRAPPER}} .single-testimonial-item-09 .content-area .ratings i+i" => 'margin-left: {{SIZE}}{{UNIT}};'
				]
			]
		);
		$this->add_control(
			'author_meta_top_gap',
			[
				'label'      => esc_html__( 'Client Details Top Space', 'aapside-master' ),
				'type'       => Controls_Manager::SLIDER,
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 500,
						'step' => 2,
					],
					'%'  => [
						'min'  => 0,
						'max'  => 500,
						'step' => 2,
					]
				],
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					"{{WRAPPER}} .single-testimonial-item-09 .content-area .author-meta" => 'margin-top: {{SIZE}}{{UNIT}};'
				]
			]
		);
		$this->add_control( 'name_color', [
			'type'      => Controls_Manager::COLOR,
			'label'     => esc_html__( 'Name Color', 'aapside-master' ),
			'selectors' => [
				"{{WRAPPER}} .single-testimonial-item-09 .content-area .author-meta .title" => "color: {{VALUE}}"
			]
		] );

		$this->add_control( 'description_color', [
			'type'      => Controls_Manager::COLOR,
			'label'     => esc_html__( 'Description Color', 'aapside-master' ),
			'selectors' => [
				"{{WRAPPER}} .single-testimonial-item-09 .content-area p" => "color: {{VALUE}}"
			]
		] );
		$this->add_control( 'designation_color', [
			'type'      => Controls_Manager::COLOR,
			'label'     => esc_html__( 'Designation Color', 'aapside-master' ),
			'selectors' => [
				"{{WRAPPER}} .single-testimonial-item-09 .content-area .author-meta .designation" => "color: {{VALUE}}"
			]
		] );
		$this->add_control( 'rating_color', [
			'type'      => Controls_Manager::COLOR,
			'label'     => esc_html__( 'Ratings Color', 'aapside-master' ),
			'selectors' => [
				"{{WRAPPER}} .single-testimonial-item-09 .content-area .ratings" => "color: {{VALUE}}"
			]
		] );

		$this->end_controls_section();

		$this->start_controls_section( 'typography_section', [
			'label' => esc_html__( 'Typography Settings', 'aapside-master' ),
			'tab'   => Controls_Manager::TAB_STYLE
		] );
		$this->add_group_control( Group_Control_Typography::get_type(), [
			'name'     => 'name_typography',
			'label'    => esc_html__( 'Name Typography', 'aapside-master' ),
			"selector" => "{{WRAPPER}} .single-testimonial-item-09 .content-area .author-meta .title"
		] );
		$this->add_group_control( Group_Control_Typography::get_type(), [
			'name'     => 'description_typography',
			'label'    => esc_html__( 'Description Typography', 'aapside-master' ),
			"selector" => "{{WRAPPER}} .single-testimonial-item-09 .content-area p"
		] );
		$this->add_group_control( Group_Control_Typography::get_type(), [
			'name'     => 'designation_typography',
			'label'    => esc_html__( 'Designation Typography', 'aapside-master' ),
			"selector" => "{{WRAPPER}} .single-testimonial-item-09 .content-area .author-meta .designation"
		] );
		$this->end_controls_section();
	}

	/**
	 * Render Elementor widget output on the frontend.
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {
		$settings              = $this->get_settings_for_display();
		$all_testimonial_items = $settings['testimonial_items'];
		$rand_numb             = rand( 333, 999999999 );

		//slider settings
		$loop            = $settings['loop'] ? 'true' : 'false';
		$items           = $settings['items'] ? $settings['items'] : 4;
		$autoplay        = $settings['autoplay'] ? 'true' : 'false';
		$autoplaytimeout = $settings['autoplaytimeout']['size'];

		?>
        <div class="testimonial-carousel-wrapper appside-rtl-slider">
            <div class="appside-testimonial-carousel-04 owl-carousel"
                 id="testimonial-one-carousel-09-<?php echo esc_attr( $rand_numb ); ?>"
                 data-loop="<?php echo esc_attr( $loop ); ?>"
                 data-margin="<?php echo esc_attr( $settings['margin']['size'] ); ?>"
                 data-items="<?php echo esc_attr( $items ); ?>"
                 data-autoplay="<?php echo esc_attr( $autoplay ); ?>"
                 data-autoplaytimeout="<?php echo esc_attr( $autoplaytimeout ); ?>"
            >
				<?php
				foreach ( $all_testimonial_items as $item ):
					?>
                    <div class="single-testimonial-item-09">
                        <div class="icon"><i class="fa fa-quote-left"></i></div>
                        <div class="content-area">
							<?php if ( ! empty( $item['ratings'] ) ): ?>
                                <div class="ratings">
									<?php
									for ( $i = 0; $i < $item['ratings_count']; $i ++ ) {
										print '<i class="fa fa-star"></i>';
									}
									?>
                                </div>
							<?php endif; ?>
                            <p><?php echo esc_html( $item['description'] ); ?></p>
                            <div class="author-meta">
                                <h4 class="title"><?php echo esc_html( $item['name'] ); ?></h4>
								<?php
								if ( ! empty( $item['designation_status'] ) ) {
									printf( '<span class="designation">%1$s</span>', esc_html( $item['designation'] ) );
								}
								?>
                            </div>
                        </div>
                    </div>
				<?php endforeach; ?>
            </div>
        </div>
		<?php
	}
}

Plugin::instance()->widgets_manager->register_widget_type( new Appside_Testimonial_Nine_Widget() );
