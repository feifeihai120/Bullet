package com.wuweibi.bullet.entity;

import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;
import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * <p>
 *    用户模型
 * </p>
 *
 * @author marker
 * @since 2017-12-08
 */
@Data
@TableName("t_sys_users")
public class User extends Model<User> {

    private static final long serialVersionUID = 1L;

	@TableId(value="id", type= IdType.AUTO)
	private Long id;
	private String email;
	private String nickname;
	private String password;
	private String agree;

	/**
	 * 头像
	 */
	@TableField("icon")
	private String icon;

	/**
	 * 登录时间
	 */
	@TableField("loginTime")
	private Date loginTime;

	/**
	 * 余额
	 */
	@TableField("balance")
	private BigDecimal balance;




	@Override
	protected Serializable pkVal() {
		return this.id;
	}

}
