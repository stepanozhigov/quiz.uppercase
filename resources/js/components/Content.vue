<template>
	<section class="questContent" v-if="step >= 1">
		<div class="questContent__wrapper">
			<div class="questContent__items">
				<div class="questContent__items_item" v-if="step === 1">
					<div class="questContent__forLabel">
						<ul class="questContent_list">
							<li>
								<label for="q1_v1" class="label">
									<input
										type="radio"
										v-model="questions.quest_1"
										id="q1_v1"
										class="input_hidden"
										value="Партнёрство с ограниченной ответственностью"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q1_v1')" />
								</label>
							</li>
							<li>
								<label for="q1_v2" class="label">
									<input
										type="radio"
										v-model="questions.quest_1"
										id="q1_v2"
										class="input_hidden"
										value="Филиал или представительство иностранной компании"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q1_v2')" />
								</label>
							</li>
							<li>
								<label for="q1_v3" class="label">
									<input
										type="radio"
										v-model="questions.quest_1"
										id="q1_v3"
										class="input_hidden"
										value="Компания в Свободной Экономической Зоне"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q1_v3')" />
								</label>
							</li>
							<li>
								<label for="q1_v4" class="label">
									<input
										type="radio"
										v-model="questions.quest_1"
										id="q1_v4"
										class="input_hidden"
										value="Оффшорная компания"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q1_v4')" />
								</label>
							</li>
							<li>
								<label for="q1_v5" class="label">
									<input
										type="radio"
										v-model="questions.quest_1"
										id="q1_v5"
										class="input_hidden"
										value="Нужна помощь для определения типа компании"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q1_v5')" />
								</label>
							</li>
						</ul>
					</div>
				</div>

				<div class="questContent__items_item" v-if="step === 2">
					<div class="questContent__forLabel questContent_1_2">
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_2_1')"
						/>
						<ul class="questContent__forLabel_list">
							<li>
								<label for="q2_v1" class="label">
									<input
										type="radio"
										v-model="questions.quest_2"
										id="q2_v1"
										class="input_hidden"
										value="Да"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q2_v1')" />
								</label>
							</li>
							<li>
								<label for="q2_v2" class="label">
									<input
										type="radio"
										v-model="questions.quest_2"
										id="q2_v2"
										class="input_hidden"
										value="Нет')"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q2_v2')" />
								</label>
							</li>
							<li>
								<label for="q2_v3" class="label">
									<input
										type="radio"
										v-model="questions.quest_2"
										id="q2_v3"
										class="input_hidden"
										value="Требуется помощь в определении"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q2_v3')" />
								</label>
							</li>
						</ul>
					</div>

					<div class="questContent__forLabel questContent_1_2">
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_2_2')"
						/>
						<div class="questContent_range">
							<vue-slider
								class="slider"
								tooltip="always"
								:min="0"
								:max="5"
								v-model="questions.quest_2_r"
							>
							</vue-slider>
						</div>
					</div>
				</div>

				<div class="questContent__items_item" v-if="step === 3">
					<div class="questContent__forLabel questContent_1_2">
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_3_1')"
						/>
						<ul class="questContent__forLabel_list">
							<li>
								<label for="q3_v1" class="label">
									<input
										type="radio"
										v-model="questions.quest_3"
										id="q3_v1"
										class="input_hidden"
										value="ОАЭ"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q3_v1')" />
								</label>
							</li>
							<li>
								<label for="q3_v2" class="label">
									<input
										type="radio"
										v-model="questions.quest_3"
										id="q3_v2"
										class="input_hidden"
										value="Страны Персидского Залива"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q3_v2')" />
								</label>
							</li>
							<li>
								<label for="q3_v3" class="label">
									<input
										type="radio"
										v-model="questions.quest_3"
										id="q3_v3"
										class="input_hidden"
										value="Другой страны"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q3_v3')" />
								</label>
							</li>
						</ul>
					</div>

					<div class="questContent__forLabel questContent_1_2">
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_3_2')"
						/>
						<div class="questContent_range">
							<vue-slider
								class="slider"
								tooltip="always"
								:min="0"
								:max="5"
								v-model="questions.quest_3_r"
							>
							</vue-slider>
						</div>
					</div>
				</div>

				<div class="questContent__items_item" v-if="step === 4">
					<div class="questContent__forLabel">
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_4_1')"
						/>
						<div class="questContent_range">
							<vue-slider
								class="slider"
								tooltip="always"
								:min="0"
								:max="5"
								v-model="questions.quest_4_r"
							>
							</vue-slider>
						</div>
						<label for="q4_v1" class="label">
							<input
								type="checkbox"
								v-model="questions.quest_4"
								id="q4_v1"
								class="input_hidden"
								value="Да"
							/>
							<span class="checkbox"></span>
							<span v-html="$ml.get('q4_v1')" />
						</label>
					</div>
				</div>

				<div class="questContent__items_item" v-if="step === 5">
					<div class="questContent__forLabel">
						<ul class="questContent_list">
							<li>
								<label for="q5_v1" class="label">
									<input
										type="radio"
										v-model="questions.quest_5"
										id="q5_v1"
										class="input_hidden"
										value="В ближайшие дни"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q5_v1')" />
								</label>
							</li>
							<li>
								<label for="q5_v2" class="label">
									<input
										type="radio"
										v-model="questions.quest_5"
										id="q5_v2"
										class="input_hidden"
										value="В течении месяца"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q5_v2')" />
								</label>
							</li>
							<li>
								<label for="q5_v3" class="label">
									<input
										type="radio"
										v-model="questions.quest_5"
										id="q3_v3"
										class="input_hidden"
										value="Прицениваюсь"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q5_v3')" />
								</label>
							</li>
						</ul>
					</div>
				</div>

				<div class="questContent__items_itemFull" v-if="step === 6">
					<div class="questContent__forLabel questContent_1_3">
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_6_1')"
						/>
						<ul class="questContent__forLabel_list">
							<li>
								<input
									type="text"
									v-model="questions.quest_6_1"
									class="input"
									:placeholder="$ml.get('q6_v1')"
								/>
							</li>
						</ul>
					</div>
					<div class="questContent__forLabel questContent_1_3">
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_6_2')"
						/>
						<div class="questContent_range">
							<vue-slider
								class="slider"
								tooltip="always"
								:min="0"
								:max="300"
								v-model="questions.quest_6_r"
							>
							</vue-slider>
						</div>
					</div>
					<div class="questContent__forLabel questContent_1_3">
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_6_3')"
						/>
						<ul class="questContent__forLabel_list">
							<li>
								<input
									type="text"
									v-model="questions.quest_6_3"
									class="input"
									:placeholder="$ml.get('q6_v3')"
								/>
							</li>
						</ul>
					</div>
				</div>

				<div class="questContent__items_itemFull" v-if="step === 7">
					<div class="questContent__forLabel questContent_1_3">
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_7_1')"
						/>
						<div class="questContent_range mb">
							<vue-slider
								class="slider"
								tooltip="always"
								:min="0"
								:max="500"
								:tooltip-formatter="areaFormatter"
								v-model="questions.quest_7_1r"
								@change="changeQ1"
							>
							</vue-slider>
						</div>
						<ul class="questContent__forLabel_list">
							<li>
								<label for="q7_v1_1" class="label">
									<input
										type="radio"
										v-model="questions.quest_7_1"
										id="q7_v1_1"
										class="input_hidden"
										value="Мне не нужен офис"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q7_v1_1')" />
								</label>
							</li>
							<li>
								<label for="q7_v1_2" class="label">
									<input
										type="radio"
										v-model="questions.quest_7_1"
										id="q7_v1_2"
										class="input_hidden"
										value="Нужна помощь для определения"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q7_v1_2')" />
								</label>
							</li>
						</ul>
					</div>
					<div class="questContent__forLabel questContent_1_3 customContent">
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_7_2')"
						/>
						<ul class="questContent__forLabel_list">
							<li>
								<label for="q7_v2" class="label">
									<input
										type="checkbox"
										v-model="questions.quest_7_2"
										id="q7_v2"
										class="input_hidden"
										value="Да"
									/>
									<span class="checkbox"></span>
									<span v-html="$ml.get('q7_v2')" />
								</label>
							</li>
						</ul>
					</div>
					<div class="questContent__forLabel questContent_1_3">
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_7_3')"
						/>
						<div class="questContent_range mb">
							<vue-slider
								class="slider"
								tooltip="always"
								:min="0"
								:max="10000000"
								:interval="10000"
								:tooltip-formatter="priceFormatter"
								v-model="questions.quest_7_3r"
								@change="changeQ2"
							>
							</vue-slider>
						</div>
						<ul class="questContent__forLabel_list">
							<li>
								<label for="q7_v3" class="label">
									<input
										type="radio"
										v-model="questions.quest_7_3"
										id="q7_v3"
										class="input_hidden"
										value="Не знаю"
									/>
									<span class="radio"></span>
									<span v-html="$ml.get('q7_v3')" />
								</label>
							</li>
						</ul>
					</div>
				</div>

				<!-- CONTACTS -->
				<div class="questContent__items_item" v-if="step === 8">
					<div class="questContent__forLabel">
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_connection')"
						/>

						<!-- contacts: contact methods -->
						<ul class="questContent_checkbox">
							<!-- call -->
							<li>
								<label for="connection_call" class="label">
									<input
										type="checkbox"
										v-model="questions.connection"
										id="connection_call"
										class="input_hidden"
										value="Звонок"
									/>
									<span class="checkbox"></span>
									<span v-html="$ml.get('connection_call')" />
								</label>
							</li>

							<!-- Email -->
							<li>
								<label for="connection_email" class="label">
									<input
										type="checkbox"
										v-model="questions.connection"
										id="connection_email"
										class="input_hidden"
										value="Электронная почта"
									/>
									<span class="checkbox"></span>
									<span v-html="$ml.get('connection_email')" />
								</label>
							</li>

							<!-- WhatsApp -->
							<li>
								<label for="connection_whatsApp" class="label">
									<input
										type="checkbox"
										v-model="questions.connection"
										id="connection_whatsApp"
										class="input_hidden"
										value="WhatsApp"
									/>
									<span class="checkbox"></span>
									<span v-html="$ml.get('connection_whatsApp')" />
								</label>
							</li>
						</ul>
						<p
							class="questContent__forLabel_title"
							v-text="$ml.get('label_phone')"
						/>
						<div class="questContent__form">
							<!-- <phone-mask-input
								v-model="phoneForm"
								defaultCountry="ae"
								showFlag
								wrapperClass="input_wrapper"
								inputClass="input"
								flagClass="input_flag"
								@isValid="validPhone"
							/> -->

							<vue-tel-input
								v-model="phone"
								v-bind="settings"
								@validate="onCountryValidate"
								@onInput="onCountryInput"
								@country-changed="onCountryChange"
								placeholder="Ваш телефон *"
								autocomplete="off"
							></vue-tel-input>

							<button
								class="btn btn-pulse btn_effect questContent__form_btn"
								@click="submitQuiz"
								:disabled="!formValid"
								v-text="$ml.get('btn_send')"
							/>
							<p class="alarm" v-html="$ml.get('alarm')" />
						</div>
					</div>
				</div>

				<div class="questContent__items_item" v-if="step === 9">
					<div class="questContent__finish">
						<div
							class="questContent__finish_step"
							v-text="$ml.get('thanks_subtitle')"
						/>
						<div
							class="questContent__finish_title"
							v-text="$ml.get('thanks_title')"
						/>
						<!-- <a :href="siteUrl" class="btn questContent__finish_btn" v-text="$ml.get('back_to_site')"/> -->
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import PhoneMaskInput from "vue-phone-mask-input";
	import VueSlider from "vue-slider-component";
	import { VueTelInput } from "vue-tel-input";
	import axios from "axios";

	import { mapGetters } from "vuex";

	export default {
		name: "Content",
		data: function () {
			return {
				phone: "",
				settings: {
					placeholder: "Ваш телефон *",
					disabledFormatting: false,
					enabledCountryCode: true,
					mode: "international",
					preferredCountries: ["fr", "us", "gb"],
					validCharactersOnly: true,
					dynamicPlaceholder: true,
					inputOptions: {
						showDialCode: false,
						tabindex: 0,
					},
				},
				phoneForm: "",
				priceFormatter: (v) =>
					`${(v + " $").replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}`,
				areaFormatter: (v) =>
					`${(v + " м2").replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}`,
			};
		},
		computed: {
			...mapGetters(["step", "questions", "isMobile", "siteUrl"]),
			formValid() {
				return false;
			},
		},
		methods: {
			onCountryValidate({ number, isValid, country }) {
				//console.log(number);
			},
			onCountryInput(input) {
				//console.log(input);
				this.phoneIsValid = input.isValid;
			},
			onCountryChange(country) {
				//if (this.ipLocation == null) this.setIpLocation(country.name);
				//console.log(country);
				this.phone = "";
			},
			changeQ1() {
				this.questions.quest_7_1 = "office";
			},
			changeQ2() {
				this.questions.quest_7_3 = "price";
			},
			submitQuiz(e) {
				e.preventDefault();

				if (this.isValidPhone) {
					gtag("event", "send", {
						event_category: "quiz-business-in-UAE",
					});
					window.ym(62231704, "reachGoal", "quiz-form-uae-ru");

					let text = [
						`Какая лицензия вам необходима?: ${this.questions.quest_1}`,
						`\nУчредитель — физическое лицо?: ${this.questions.quest_2}`,
						`\nКоличество учредителей?: ${this.questions.quest_2_r}`,
						`\nГражданство: ${this.questions.quest_3}`,
						`\nКоличество директоров?: ${this.questions.quest_3_r}`,
					];

					this.questions.quest_4.length
						? text.push(
								`\nТребуется помощь для определения необходимости визы: ${this.questions.quest_4}`
						  )
						: text.push(
								`\nУкажите необходимое количество виз: ${this.questions.quest_4_r}`
						  );

					text.push(
						`\nКогда планируете подать заявку на регистрацию компании в ОАЭ?: ${this.questions.quest_5}`,
						`\nНаименование компании: ${this.questions.quest_6_1}`,
						`\nКоличество сотрудников?: ${this.questions.quest_6_r}`,
						`\nВид деятельности компании: ${this.questions.quest_6_3}`
					);

					this.questions.quest_7_1 === "office"
						? text.push(
								`\nРазмер офисных помещений: ${this.questions.quest_7_1r} m2`
						  )
						: text.push(
								`\nРазмер офисных помещений: ${this.questions.quest_7_1}`
						  );

					if (this.questions.quest_7_2.length)
						text.push(`\nБанковский счёт: ${this.questions.quest_7_2}`);

					this.questions.quest_7_3 === "price"
						? text.push(
								`\nПланируемые объёмы транзакций: ${this.questions.quest_7_3r} $`
						  )
						: text.push(
								`\nПланируемые объёмы транзакций: ${this.questions.quest_7_3}`
						  );

					if (this.questions.connection.length)
						text.push(
							`\nВыберите предпочитаемые способы связи: ${this.questions.connection}`
						);

					text = text.toString();

					axios
						.post("/leads", {
							phone: this.phone,
							tag: "ОАЭ - Квиз",
							text,
						})
						.then(() => {
							this.$store.state.step = 9;
							fbq("track", "Lead");
							// setTimeout(() => {
							//     window.location.href = this.siteUrl;
							// }, 4000);
						});
				} else
					this.$notify({
						group: "alert",
						type: "error",
						text: this.$ml.get("alert_phone"),
					});
			},
		},
		components: {
			PhoneMaskInput,
			VueSlider,
			VueTelInput,
		},
	};
</script>
<style lang="scss" scoped>
	@import "../../sass/mixins.scss";
	.questContent {
		&__wrapper {
			@include wrapper();
			//100vh - quizHeader - quizBottom - toolbarSafari
			min-height: calc(100vh - 168px - 120px - 108px);

			@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
				min-height: calc(100vh - 168px - 120px - 179px);
			}
			@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
				min-height: calc(100vh - 168px - 120px - 179px);
			}
			@include above($break_sm) {
				min-height: calc(100vh - 80px - 224px - 120px - 108px);
			}
			@include above($break_lg) {
				min-height: calc(100vh - 80px - 224px - 120px);
			}
		}
		&__items {
			@include row-flex();
			height: 100%;

			&_item {
				@include col();
				@include size(24);
				@include size-lg(16);
				@include offset-lg(4);
				padding-top: rem(48);
				@include above($break_sm) {
					padding-top: rem(64);
					display: flex;
				}
			}

			&_itemFull {
				@include col();
				@include size(24);
				padding-top: rem(48);
				@include above($break_sm) {
					padding-top: rem(64);
					display: flex;
					flex-wrap: wrap;
				}
			}
		}
		&__forLabel {
			@include col();
			@include size(24);

			&_title {
				font-size: rem(18);
				font-weight: 700;
				margin-bottom: rem(16);
			}

			&_list {
				@include row-flex();

				li {
					@include col();
					@include size(24);
					line-height: 1.5;
					letter-spacing: rem(-0.1);
					overflow: hidden;

					&:not(:last-child) {
						margin-bottom: rem(24);
						@include above($break_sm) {
							margin-bottom: rem(16);
						}
					}
				}
			}
		}
		.customContent {
			@include above($break_sm) {
				order: 3;
			}
			@include above($break_lg) {
				order: 0;
			}

			ul {
				@include above($break_lg) {
					margin-top: rem(48);
				}
			}
		}
		&_1_2 {
			@include size_sm(12);
			margin-bottom: rem(48);
		}
		&_1_3 {
			@include size(24);
			@include size_sm(12);
			@include size_lg(8);
			margin-bottom: rem(48);
		}
		&_2_3 {
			@include size_sm(12);
			@include size_lg(16);

			li:last-child {
				margin-top: rem(24);
			}
			@include above($break_lg) {
				ul {
					display: flex;
				}
				li:first-child {
					order: -1;
					@include size-lg(12);
				}
				li:last-child {
					order: -1;
					@include size-lg(12);
					margin-top: 0;
				}
			}
		}
		&_list {
			@include row-flex();

			li {
				@include col();
				@include size(24);
				@include size-sm(12);
				line-height: 1.5;
				letter-spacing: rem(-0.1);
				overflow: hidden;

				&:not(:last-child) {
					margin-bottom: rem(24);
					@include above($break_sm) {
						margin-bottom: rem(16);
					}
				}
			}

			.hr {
				margin-bottom: rem(24);
				@include above($break_sm) {
					margin-bottom: rem(16);
				}
			}
		}
		&_half {
			@include size-sm(12);

			&_half {
				@include size-sm(12);
			}
		}
		&_checkbox {
			@include row-flex();
			padding-bottom: rem(16);

			@include above($break_sm) {
				padding-bottom: rem(48);
			}

			li {
				@include col();
				@include size(24);
				@include size-sm(12);
				line-height: 1.5;
				letter-spacing: rem(-0.1);
				overflow: hidden;

				&:not(:last-child) {
					margin-bottom: rem(16);
				}
			}
		}
		&_gifts {
			position: relative;
			display: flex;
			flex-direction: column;
			padding-top: 0 !important;

			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: rem(-16);
				right: rem(-16);
				bottom: 0;
				background-image: url(../../images/gift_sm.jpg);
				background-size: cover;
				background-position: right;

				@include above($break_sm) {
					left: rem(-32);
					right: rem(-32);
				}
			}

			.block {
				box-sizing: border-box;
				z-index: 10;
				min-height: calc(100vh - 168px - 120px - 108px);

				@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
					min-height: calc(100vh - 168px - 120px - 179px);
				}

				@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
					min-height: calc(100vh - 168px - 120px - 179px);
				}

				@include above($break_sm) {
					min-height: calc(100vh - 224px - 80px - 120px - 108px);
				}
				@include above($break_lg) {
					min-height: calc(100vh - 224px - 80px - 120px);
				}
			}

			&_item {
				@include col();
				@include size(24);
				@include size-lg(16);
				@include offset-lg(4);
				display: flex;
				justify-content: center;
				padding-bottom: rem(32);
				padding-top: rem(32);
			}

			.btn {
				padding: 0;
			}
		}
		&_range {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding-top: rem(32);

			& + label {
				margin-top: rem(32);
			}

			&.mb {
				margin-bottom: rem(32);
			}

			&_input {
				color: $primary_color;
				font-size: rem(20);
				text-align: center;
				margin-bottom: rem(8);

				@include above($break_lg) {
					display: none;
				}
			}
			&_intro {
				width: 100%;
				margin-top: rem(8);
				display: flex;
				justify-content: space-between;
				font-size: rem(20);
				color: #ccc6c6;
			}
		}
		.gifts {
			@include size-lg(24);
			@include offset-lg(0);
		}
		&__form {
			@include row-flex();
			flex-direction: column;
			align-items: center;

			@include above($break_sm) {
				flex-direction: row;
				flex-wrap: wrap;
				align-items: flex-start;
			}

			& > * {
				@include col();
				@include size(24);
				@include size-sm(12);
			}

			.alarm {
				padding-bottom: rem(16);
				@include above($break_sm) {
					margin-left: auto;
					text-align: left;
				}
			}

			&_intro {
				font-size: rem(18);
				letter-spacing: rem(-0.3);
				line-height: 1.44;
				margin-bottom: rem(32);
				text-align: center;
			}
			&_btn {
				background-color: $primary_color;
				color: $white;
				margin-top: rem(16);
				margin-bottom: rem(16);
				@include above($break_sm) {
					margin-top: 0;
				}

				&[disabled="disabled"] {
					cursor: not-allowed;
				}

				&:active {
					opacity: 0.5;
				}
			}
		}
		&__finish {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			min-height: calc(100vh - 108px - 48px);

			@include above($break_sm) {
				min-height: calc(100vh - 108px - 80px - 64px);
			}
			@include above($break_lg) {
				min-height: calc(560px - 64px);
			}

			&_step {
				font-size: rem(12);
				font-weight: rem(12);
				letter-spacing: rem(6);
				line-height: 1.33;
				text-transform: uppercase;
				margin-bottom: rem(8);

				@include above($break_sm) {
					margin-bottom: rem(16);
				}
				@include above($break_lg) {
					font-size: rem(15);
				}
			}
			&_title {
				font-size: rem(24);
				font-weight: 700;
				letter-spacing: rem(-0.2);
				line-height: 1.25;
				margin-bottom: rem(48);

				@include above($break_sm) {
					font-size: rem(36);
					letter-spacing: rem(-0.4);
				}
				@include above($break_lg) {
					font-size: rem(48);
					letter-spacing: rem(-0.8);
					line-height: 1.1;
				}
			}
			&_btn {
				background-color: $primary_color;
				color: $white;
				letter-spacing: rem(0.8);
			}
		}
	}

	@-webkit-keyframes circle {
		0% {
			opacity: 1;
		}
		40% {
			opacity: 1;
		}
		100% {
			width: 200%;
			height: 200%;
			opacity: 0;
		}
	}
	@keyframes circle {
		0% {
			opacity: 1;
		}
		40% {
			opacity: 1;
		}
		100% {
			width: 200%;
			height: 200%;
			opacity: 0;
		}
	}
	/* End Circle */
</style>
