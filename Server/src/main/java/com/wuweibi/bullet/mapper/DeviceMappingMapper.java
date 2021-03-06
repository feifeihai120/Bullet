package com.wuweibi.bullet.mapper;

import com.wuweibi.bullet.entity.DeviceMapping;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.security.core.parameters.P;

import java.util.List;
import java.util.Map;

/**
 * <p>
  *  Mapper 接口
 * </p>
 *
 * @author marker
 * @since 2017-12-09
 */
public interface DeviceMappingMapper extends BaseMapper<DeviceMapping> {


    /**
     * 判断域名是否存在
     * @param domain
     * @return
     */
    boolean existsDomain(Map<String, Object> domain);


    /**
     *
     * @param build
     * @return
     */
    boolean exists(Map<String, Object> build);

    String selectDeviceNo(Long  deviceId);


    /**
     * 根据设备编号获取
     * @param deviceNo 设备编号
     * @return
     */
    List<DeviceMapping> selectListByDeviceNo(String deviceNo);

    /**
     * 判断域名是否被绑定
     * @param deviceId 设备ID
     * @param domainId 域名ID
     * @return
     */
    @Select("select count(1) from t_device_mapping where domain_id =#{domainId} and device_id=#{deviceId}")
    boolean existsDomainId(@Param("deviceId") Long deviceId, @Param("domainId") Long domainId);
}